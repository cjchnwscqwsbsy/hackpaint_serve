const jwt = require('jsonwebtoken');
const signkey = 'abcdefg';

exports.setToken = (username,password) => {
    return new Promise((resolve, reject) => {
        jwt.sign({
            name:username,
            pass:password
        },signkey,{ expiresIn:'360' },(err, token) => {
            if (!err) {
                resolve({token:token,msg:'生成token'});
            }
            reject({msg:`生成token失败，${err}`});
        });
    });
};

exports.verToken = (token) => {
    console.log('abtain token:', token);
    return new Promise((resolve, reject) => {
        jwt.verify(token,signkey,(err,user) => {
            if (!err) {
                resolve({msg:'解析token',data:user});
            }
            reject({msg:`解析token失败， ${err}`});
        });
    });
};
