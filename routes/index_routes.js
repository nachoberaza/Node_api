const express = require("express");
const router = express.Router();
const extension_helper = require("../utils/extension_helper");
const fs = require("fs");

/** It takes the file name how a prefix extension   */
const PATH_ROUTES = __dirname;
fs.readdirSync(PATH_ROUTES).forEach((file) => {
  const name = extension_helper.clearFileName(file);
  if (name != "index") {
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
