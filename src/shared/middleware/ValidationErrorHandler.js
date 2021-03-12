const ERRORS = require('./../../lang/en/error_messages');
const { validationResult } = require('express-validator');
const CommonFunctions = require('../utils/CommonFunctions');

module.exports = {

    checkError (req, res, next) {

        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                const errorArr = errors.array().map(err => {

                    const {type , message} = ERRORS[err.msg];
                    return {
                        type,
                        parameter : err.param,
                        message
                    }
                });
                
                return CommonFunctions.createErrorResponse(req, res, errorArr, ERRORS.codes.bad_request);
            }

            next();
        } catch (error) {
            return CommonFunctions.createErrorResponse(req, res, error);
        }
    }
}