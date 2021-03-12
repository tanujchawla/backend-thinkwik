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
}