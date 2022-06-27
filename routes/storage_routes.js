const multer = require('multer');
const express = require('express');
const { saveFile } = require('../controllers/storage_controller'); 
const router = express.Router();

/** Multer midleware */
const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        const pathStorage = `${__dirname}/../storage`;
        callback(null,pathStorage)
    },
    filename: (req,file,callback) => {
        const extension = file.originalname.split('.').pop(); 
        const filename = `file-&{Date.now()}.${ext}`;
        callback(null,filename);
    }
});

const uploadMiddleware = multer({storage});

router.post('/',single("file"),saveFile);

module.exports = router;