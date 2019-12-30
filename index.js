const express = require('express');
const bodyParse = require('body-parser');
const { transformPromise } = require('./src/lib/transformpromise');
const { router } = require('./src/router/index');

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));

app.all("*", async (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use('*', router);

app.listen(9000, () => console.log('Example app listening on port 9000!'));
