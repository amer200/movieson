const express = require('express');
const route = express.Router();
const mainController = require('../controllers/main.js');

route.get('/', mainController.getMainPage);



module.exports = route;