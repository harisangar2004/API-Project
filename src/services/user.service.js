import userDao from '../modules/persistance/user.dao'
/**
 * get a user from its ID
 * @param {integer} userId 
 * @returns object
 */
const getUser = (userId) => userDao.get(userId);
/**
 * get all users
 * @returns object
 */
const getAllUser = () => userDao.getAll();
/**
 * update a user from its ID
 * @param {integer} userId 
 * @param {object} details 
 * @returns 
 */
const updateUser = (userId, details) =>  userDao.update(userId,details);
/**
 * Add a user
 * @param {object} details 
 * @returns 
 */
const addUser = (details) => userDao.insert(details);
/**
 * remove a user
 * @param {integer} userId 
 * @returns 
 */
const removeUser = (userId) => userDao.remove(userId);

export default {
    getUser,
    getAllUser,
    updateUser,
    addUser,
    removeUser
} 