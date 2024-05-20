const express = require('express');
let router = express.Router();
const usersController = require('../controllers/users.controller')

router.post("/signin", usersController.signin);

router.post("/signup", usersController.signup);