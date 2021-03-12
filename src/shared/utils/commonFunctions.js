const ERRORS = require('./../../lang/en/error_messages');
const { NODE_ENV } = require('./../../../config/config');
const bcrypt = require('bcryptjs');

module.exports = {
    
    filterObj(obj, filterArr) {
        const newObj = {}
        filterArr.forEach(el => {
            if(obj[el] !== undefined) {
                newObj[el] = obj[el];
            }
        });

        return newObj;
    },

    encrypt(str) {
        const encryptedStr = bcrypt.hashSync(str, 10);

        return encryptedStr;
    },

    verifyPassword(password, hash) {
        return bcrypt.compareSync(password, hash);
    },

    // generateSessionToken() {
    //     let str = '';
    //     for(let i = 0; i< 3; i++) {
    //         str+=(Math.random().toString(36).substring(2, 36) + Math.random().toString(36).substring(2, 15));
    //     }
    //     return str;
    // },

    // generic method to return success response
    createSuccessResponse(req, res, data = null, code = 200) {
        let response = {
            status : 'success',
            code :  code,
            data
        };

        return res.status(code).json(response);
    },

    // generic method to return error response
    createErrorResponse(req, res, errors = null, code = 500) {
        let response = {
            status : 'failed',
            code : code
        }

        if(code === 500) {
            if(NODE_ENV === 'dev') {
                response.errors = String(errors.stack ? errors.stack : errors);
            } else {
                response.errors = ERRORS['action_failed'];
            }
        } else {
            response.errors = errors;
        }

        return res.status(code).json(response);
    },

    validateAccordingToType (errors, fieldType, fieldValue, apiKey) {

        let error = null;
        
        switch(fieldType) {
            case 'string' :
                if(!this.validateStringField(fieldValue)) {
                    error = {...ERRORS['invalid_string']};
                }
                break;
            case 'number' :
                if(!this.validateNumberField(fieldValue)) {
                    error = {...ERRORS['invalid_number']};
                }
                break;
            case 'boolean' :
                if(!this.validateBooleanField(fieldValue)) {
                    error = {...ERRORS['invalid_boolean']};
                }
                break;
            default : break;
        }

        if(error) {
            const {type , message} = error;
            errors.push({
                type,
                param : apiKey,
                message
            });
        }

        return errors;
    },

    validateStringField(value) {
        if(value && typeof value !== 'string')  {
            return false;
        }
        return true;
    },

    validateNumberField (value) {
        if(value && value !== 'null') {
            if(typeof value === 'string') {
                let pattern = /^[+-]?[0-9]{1,9}(?:\.[0-9]{1,2})?$/;
                return pattern.test(value);
            } else if(typeof value !== 'number') {
                return false;
            }
        }   
        return true;
    },

    validateBooleanField (value) {
        if(!["true", "false", true, false, '', 'null', null].includes(value)) {
            return false;
        }
        return true;
    }
}