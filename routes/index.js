const express = require('express');
const controllers = require("../controller/fetch");
const router = express.Router();

/* GET test data */
router.get('/users', controllers.getUsers );

module.exports = router;

