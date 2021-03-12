const CommonFunctions = require('./../../../shared/utils/commonFunctions');
const FIELDS = require('./../../../../config/fields');
const User = require('../models/User');
const ERRORS = require('../../../lang/en/error_messages');
const jwt = require('jsonwebtoken');
const config = require('../../../../config/config');

module.exports = {

    signup (req, res) {
        try {
            // to pass only allowed fields to db
            const userData = CommonFunctions.filterObj(req.body, FIELDS.signup);

            const hash = CommonFunctions.encrypt(userData.password)
            userData[FIELDS.password] = hash;

            let newUser = new User(userData);

            newUser.save()
                .then(data => {
                    const dataToReturn = CommonFunctions.filterObj(data, FIELDS.return_user_signup);

                    return CommonFunctions.createSuccessResponse(req, res, dataToReturn, 201);
                })
                .catch(err => {
                    return CommonFunctions.createErrorResponse(req, res, err);
                })

        } catch (error) {
            return CommonFunctions.createErrorResponse(req, res, error);
        }
    },

    signin (req, res) {
        try {
            // to pass only allowed fields to db
            const userData = CommonFunctions.filterObj(req.body, FIELDS.signin);

            User.findUserByEmail(userData[FIELDS.email])
                .then(user => {
                    if(!user) {
                        throw ERRORS.codes.authentication_failed;
                    }
                    const password = user[FIELDS.password];
                    if(CommonFunctions.verifyPassword(userData[FIELDS.password], password)) {
                        let token = jwt.sign({email : user[FIELDS.email]}, config.JWT_KEY, { expiresIn : Number(config.JWT_TOKEN_EXPIRY_TIME) })

                        let dataToReturn = {
                            access_token : token,
                            email : user[FIELDS.email],
                            user_id : user[FIELDS.id],
                            expires_in : config.JWT_TOKEN_EXPIRY_TIME
                        };

                        return CommonFunctions.createSuccessResponse(req, res, dataToReturn, 201);

                    } else {
                        throw ERRORS.codes.authentication_failed;
                    }
                })
                .catch(error => {
                    if(error === 401) {
                        return CommonFunctions.createErrorResponse(req, res, ERRORS.authentication_failed, ERRORS.codes.authentication_failed);
                    }

                    return CommonFunctions.createErrorResponse(req, res, error);
                })
        } catch (error) {
            return CommonFunctions.createErrorResponse(req, res, error);
        }
    },

    update (req, res) {
        // to pass only allowed fields to db
        const userData = CommonFunctions.filterObj(req.body, FIELDS.edit_user);

        User.findByIdAndUpdate(req.params.user_id, userData)
            .then(user => {
                if(!user) {
                    throw ERRORS.codes.resource_not_found;
                }
                const dataToReturn = CommonFunctions.filterObj(user, FIELDS.return_user);

                return CommonFunctions.createSuccessResponse(req, res, dataToReturn);
            })
            .catch(error => {
                if(error === 404) {
                    return CommonFunctions.createErrorResponse(req, res, ERRORS.authentication_failed, ERRORS.codes.authentication_failed);
                }

                return CommonFunctions.createErrorResponse(req, res, error);
            })
    }
}