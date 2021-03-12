const jwt = require('jsonwebtoken');
const config = require('../../../config/config');
const error_messages = require('../../lang/en/error_messages');
const CommonFunctions = require('./../../shared/utils/commonFunctions');

module.exports = {
    verifyToken (req, res, next) {
        const token = req.headers['x-access-token'] || req.headers['authorization']

        if(token){
            jwt.verify(token, config.JWT_KEY, (err, decoded) => {
                
                if(err){
                    return CommonFunctions.createErrorResponse(req, res, error_messages.authorization_required, error_messages.codes.authentication_failed)
                }
                if(decoded){
                    req.decoded = decoded
                    next()
                }
            })
        } 
        else{
            return CommonFunctions.createErrorResponse(req, res, error_messages.authorization_required, error_messages.codes.authentication_failed)
        }
    }
}