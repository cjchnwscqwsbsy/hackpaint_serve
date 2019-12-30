const express = require('express');
const { menuData } = require('../database/menu');
const { setToken, verToken } =  require('../token_vertify');
const { writeData } = require('../file');
const { transformPromise } = require('../lib/transformpromise');
const { homeRouter } = require('./home');
const { userRouter } = require('./user');

const router = express.Router();

router.use('/app', async (req, res, next) => {
    const [err_parse, success_parse] = await transformPromise(verToken(req.headers.authorization));
    if(err_parse){
        return res.status(401).send(err_parse);
    }
    return next();
});

router.use('/user', userRouter);

exports.router = router;
