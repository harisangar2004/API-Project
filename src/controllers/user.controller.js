import userService from '../services/user.service';
import { StatusCodes } from 'http-status-codes';
import pino from 'pino'

const logger = pino()
const STATUS = {
    success: true,
    failure: false
};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getAllUsers = (req, res) => {
    const users = userService.getAllUser();
    if (users.length) {
        logger.info(`Retrieving all users`)
        return res.status(StatusCodes.OK).send(users);
    }
    return res.status(StatusCodes.NOT_FOUND).send(
        {
            status: STATUS.failure,
            message: 'No users found',
        }
    )
};
/**
 * retrive a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = userService.getUser(id);
    if (user) {
        logger.info(`getting User ID ${id} `)
        return res.status(StatusCodes.OK).send(user);
    }
    return res.status(StatusCodes.NOT_FOUND).send(
        {
            status: STATUS.failure,
            message: `User ${id} is not found`,
        }
    )
};
/**
 * add a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const addUser =
    (req, res) => {
        const { body: user } = req;

        const addedUser = userService.addUser(user);

        logger.info('Creating a user')
        return res.status(StatusCodes.CREATED).send({
            status: STATUS.success,
            user: addedUser,
        });
    };
/**
 * update a user
 * @param {} req 
 * @param {*} res 
 * @returns 
 */
const updateUser = (req, res) => {
    const { body: user } = req;
    const id = parseInt(req.params.id, 10);
    const updatedUser = userService.updateUser(id, user);

    if (updatedUser) {
        logger.info(`updating User ID ${id} `)
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            user: updatedUser,
        });

    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} is not found`,
        });
    }
};
/**
 * remove a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const removeUser = (req, res) => {
    const { params } = req;
    const id = parseInt(params.id);
    const user = userService.getUser(id);
    if (user) {
        userService.removeUser(id);
        logger.info(`deleting a User ID ${id} `)
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: `User ${id} has been deleted. `,
        });
    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} hasn't been found`
        });
    }
};
export default {
    addUser,
    updateUser,
    getAllUsers,
    getUser,
    removeUser
}