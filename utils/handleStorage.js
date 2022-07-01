const multer = require('multer');


/** Multer midleware */
const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        const pathStorage = `${__dirname}/../storage`;
        callback(null,pathStorage)
    },
    filename: (req,file,callback) => {
        const extension = file.originalname.split('.').pop(); 
        const filename = `file-${Date.now()}.${extension}`;
        callback(null,filename);
    }
});

const uploadMiddleware = multer({storage});

module.exports = {uploadMiddleware};