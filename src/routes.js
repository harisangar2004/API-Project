import express from 'express';
import { StatusCodes } from 'http-status-codes';

// import userService from './services/user.service.js'
const router = express.Router();
const port = 3000;

const STATUS = {
    success: 'OK',
    failure: 'NO'
};

router.get('/hello-world', (req, res) => {
    res.status(StatusCodes.OK); // .created, .ok, .not_found   
    res.send('Hello World!');
});

router.post('/add', (req, res) => {
    const data = [];
    const { body: user } = req;

    // userService.addUser();
    if (!user.name) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: STATUS.failure,
            message: "Name is required",
        });
    }
    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        message: user,
    });
});


export default router;