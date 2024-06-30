import express, { response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { expressYupMiddleware } from 'express-yup-middleware';

import userController from './controllers/user.controller';
import {getUser, addUser, updateUser, removeUser} from './user.schemas';

const router = express.Router();


router.get('/ping', (req, res) => {
    res.status(StatusCodes.OK); // .created, .ok, .not_found   
    res.send('ok');
});

router.get('/all', userController.getAllUsers);

router.get('/:id',
    expressYupMiddleware({
        schemaValidator:getUser
    }),
     userController.getUser
);
//add
router.post(
    '/',
    expressYupMiddleware({
        schemaValidator: addUser 
    }),
    userController.addUser
);

//update
router.put('/:id',
    expressYupMiddleware({
        schemaValidator: updateUser,
    }),
    userController.updateUser
)

router.delete('/:id', 
    expressYupMiddleware({schemaValidator:removeUser

    }),
    userController.removeUser
);
export default router;