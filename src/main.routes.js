import express from 'express';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();
router.get('/ping', (req, res) => {
    res.status(StatusCodes.OK); // .created, .ok, .not_found   
    res.send('ok');
});

export default router;