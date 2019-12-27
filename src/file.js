const fs = require('fs');
const path = require('path');

exports.writeData = (name, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname,`./database/${name}.json`), JSON.stringify(data), (error) => {
            if (!error) {
                resolve({msg:`${name} 保存成功`});
            }
            reject({msg:`${name} 保存失败， ${error}`});
        });
    });
};

