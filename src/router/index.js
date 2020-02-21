const express = require('express');
const homeRouter = require('./home');
const userRouter = require('./user');
const uploadRouter = require('./upload');

const router = express.Router();

router.use('/home', homeRouter);

router.use('/user', userRouter);

router.use('/file', uploadRouter);

module.exports = router;
