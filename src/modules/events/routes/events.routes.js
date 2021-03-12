const express = require('express');
const EventController = require('../controllers/events.controller');
const { CREATE } = require('./../validators/events.validators');
const RequestValidator = require('./../../../shared/middleware/RequestValidator');
const ValidationErrorHandler = require('./../../../shared/middleware/ValidationErrorHandler');

const routes = express.Router();

routes.post('/', RequestValidator.validateReq(CREATE), ValidationErrorHandler.checkError, EventController.create);

module.exports = routes ;