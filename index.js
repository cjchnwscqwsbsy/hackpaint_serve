const express = require('express');
const bodyParse = require('body-parser');
const { setToken, verToken } =  require('./src/token_vertify');
const { menuData } = require('./src/database/menu');
const { writeData } = require('./src/file');

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));

app.all("*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.header('Access-Control-Allow-Methods', '*');
    // res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/home/menu', async (req, res) => {
    // const rere = await verToken(req.headers.authorization);
    res.send(menuData);
});

app.post('/login', async (req, res) => {
    const cur_token = await setToken(req.body.username,req.body.password);
    const ret = await writeData('user',req.body).catch((err) => {
        console.log(err)
    });
    if (ret.code !== 'error') {
        res.send(cur_token);
        res.send('hello world')
    } else {
        res.send('服务器错误');
    }
});


app.listen(9000, () => console.log('Example app listening on port 9000!'));
