const express = require('express');
const homeRouter = require('./home');
const userRouter = require('./user');

const router = express.Router();

router.use('/home', homeRouter);

router.use('/user', userRouter);

module.exports = router;
