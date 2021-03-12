const express = require('express');
const UserController = require('../controllers/user.controller');
const { SIGNUP, SIGNIN, UPDATE } = require('../validators/user.validator');
const RequestValidator = require('./../../../shared/middleware/RequestValidator');
const ValidationErrorHandler = require('./../../../shared/middleware/ValidationErrorHandler');
const Auth = require('./../../../shared/middleware/AuthMiddleware');

const routes = express.Router();

routes.post('/', RequestValidator.validateReq(SIGNUP), ValidationErrorHandler.checkError, UserController.signup);
routes.post('/login', RequestValidator.validateReq(SIGNIN), ValidationErrorHandler.checkError, UserController.signin);
routes.put('/:user_id', Auth.verifyToken, RequestValidator.validateReq(UPDATE), ValidationErrorHandler.checkError, UserController.update);

module.exports = routes ;