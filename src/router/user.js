const express = require('express');
const { setToken } =  require('../token_vertify');
const { writeData } = require('../file');
const { transformPromise } = require('../lib/transformpromise');

const router = express.Router();

router.post('/login', async (req, res) => {
    const [err_token, cur_token] = await transformPromise(setToken(req.body.username,req.body.password));
    if (err_token) {
        return res.send(err_token);
    }
    const [err_user, set_user] = await transformPromise(writeData('user',{...req.body,token:cur_token['token']}));
    if (err_user) {
        return res.send(err_user);
    }
    return res.send(cur_token);
});

module.exports = router;
