const fs = require('fs');
const path = require('path');

exports.writeData = (name, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname,`./database/${name}.json`), JSON.stringify(data), (error) => {
            if (!error) {
                resolve({code:'success', msg:'保存成功'});
            }
            reject({code:'error', msg:'保存失败', error:error});
        });
    });
};

