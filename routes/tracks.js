const express = require('express');
const router = express.Router();


// TODO: .../tracks GET, POST, DELETE, PUT

router.get(
    `/all`,
    (request, response) => { const data = ['Hello','world']; response.send({data}); }
);

module.exports = router;