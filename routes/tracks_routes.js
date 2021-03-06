const express = require('express');
const router = express.Router();
const {validatorCreateItem} = require('../validators/tracks_validator');
const controller = require('../controllers/tracks_controller');

// TODO: .../tracks GET, POST, DELETE, PUT

/** GET */
router.get(`/all`, controller.getItems);
router.get(`/:id`, controller.getItem);

/** POST */
router.post(`/`,validatorCreateItem,controller.createItem);

module.exports = router;