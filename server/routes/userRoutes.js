const express = require('express');
const Router = express.Router();
const {signIn ,signUp } = require('./../controllers/authController')


Router.post('/createUser' , signIn )
Router.get('/signIn',signUp)


module.exports = Router;