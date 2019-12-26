const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.all("*", (req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Content-Type', 'application/json;charset=utf-8');
    // res.header('Access-Control-Allow-Credentials', true);
    // res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.post('/user/login', (req, res) => {
    console.log('request');
    res.send('Hello World!')
});


app.listen(9000, () => console.log('Example app listening on port 9000!'));
