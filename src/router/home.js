const express = require('express');
const { menuData } = require('../database/menu');

const router = express.Router();

router.get('/menu', (req, res) => {
    res.send({dataSource:menuData,code:200});
});

module.exports = router;
