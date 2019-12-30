const express = require('express');
const bodyParse = require('body-parser');
const { transformPromise } = require('./src/lib/transformpromise');
const appRouter = require('./src/router/index');
const { verToken } =  require('./src/token_vertify');

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));

app.all("*", async (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Content-Type', 'application/json;charset=utf-8');
    // res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/app', async (req, res, next) => {
    console.log('uaidsyhfuj89798789798')
    const [err_parse, success_parse] = await transformPromise(verToken(req.headers.authorization));
    if(err_parse){
        return res.status(401).send(err_parse);
    }
    return next();

});

app.use('/app', appRouter);

app.listen(9000, () => console.log('Example app listening on port 9000!'));
