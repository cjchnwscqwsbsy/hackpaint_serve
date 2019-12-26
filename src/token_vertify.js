const jwt = require('jsonwebtoken');
const signkey = 'mes_qdhd_mobile_xhykjyxgs';

exports.setToken = (username,password) => {
    return new Promise((resolve, reject) => {
        const token = jwt.sign({
            name:username,
            pass:password
        },signkey,{ expiresIn:'0.01h' });
        resolve(token);
    });
};

exports.verToken = (token) => {
    return new Promise((resolve, reject) => {
        const info = jwt.verify(token.split(' ')[1],signkey);
        resolve(info);
    });
};
