const { uploadMiddleware } = require('../utils/handleStorage');
const express = require('express');
const { createItem } = require('../controllers/storage_controller'); 
const router = express.Router();

/** The field 'file' contains the media file to store  */
router.post('/',uploadMiddleware.single("file"),createItem);

module.exports = router;