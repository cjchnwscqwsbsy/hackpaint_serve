const express = require('express');
const bodyParse = require('body-parser');
const { setToken, verToken } =  require('./src/token_vertify');
const { menuData } = require('./src/database/menu');
const { writeData } = require('./src/file');
const { transformPromise } = require('./src/lib/transformpromise');

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));

app.all("*", async (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.header('Access-Control-Allow-Methods', '*');
    // res.header('Access-Control-Allow-Credentials', true);
    // const [err_parse, success_parse] = await transformPromise(verToken(req.headers.authorization));
    // console.log('token_parse: ',req.headers);
    next();
});

app.get('/home/menu', async (req, res) => {
    const [err_parse, success_parse] = await transformPromise(verToken(req.headers.authorization));
    console.log('token_parse: ',success_parse, err_parse);
    res.send(menuData);
});

app.post('/login', async (req, res) => {
    const [err_token, cur_token] = await transformPromise(setToken(req.body.username,req.body.password));
    if (err_token) {
        return res.send(err_token);
    }
    const [err_user, set_user] = await transformPromise(writeData('user',{...req.body,token:cur_token['token']}));
    if (err_user) {
        return res.send(err_user);
    }
    // console.log(set_user, cur_token);
    return res.send(cur_token);
});


app.listen(9000, () => console.log('Example app listening on port 9000!'));
