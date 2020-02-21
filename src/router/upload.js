const express = require('express');
const formidable = require('formidable');
const router = express.Router();

router.post('/upload', (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = './upload_files';
    form.KeepExtensions = true;
    form.parse(req, (err, name, value) => {
        console.log('err: ',err);
        console.log('name: ',name);
        console.log('value: ',value);
        res.send(value);
    });
    form.on('end', () => {
        res.end('上传完成!');
    });
});

module.exports = router;
