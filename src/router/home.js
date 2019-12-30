const express = require('express');
const { menuData } = require('../database/menu');
const { setToken, verToken } =  require('../token_vertify');
const { writeData } = require('../file');
const { transformPromise } = require('../lib/transformpromise');

const router = express.Router();

router.get('/home/menu', async (req, res) => {
    return res.send(menuData);
});

exports.homeRouter = router;
