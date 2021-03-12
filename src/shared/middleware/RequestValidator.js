const { body, param, query, check } = require('express-validator');

module.exports = {

    validateReq(fieldConfig) {
        let validationArr = [];
        
        fieldConfig.forEach(config => {
            if(config.validations.length > 0) {
                
                let validation = null;

                switch(config.paramIn) {
                    case    'body'  : validation = body(config.name); break;
                    case    'param' : validation = param(config.name); break;
                    case    'query' : validation = query(config.name); break;
                    default         : validation = check(config.name);
                }
                
                config.validations.forEach(validtn => {

                    if(validtn.optional) {
                        validation = validation.optional()
                    }

                    switch(validtn.name) {
                        case 'required' :
                            validation = validation.exists()
                            break;
                        
                        case 'notEmpty' :
                            validation = validation.notEmpty()
                            break;

                        case 'lengthRange' :
                            let len_params = validtn.params.split(',');
                            validation = validation.isLength({ min : len_params[0], max : len_params[1] })
                            break;
                        
                        case 'isEmail' :
                            validation = validation.isEmail()
                            break;

                        case 'custom' :
                            validation = validation.custom(validtn.callback)
                            break;

                        case 'pattern' :
                            validation = validation.matches(validtn.pattern)
                            break;

                        case 'integer' :
                            validation = validation.isInt()
                            break;
                        
                        case 'isArray' :
                            validation = validation.isArray()
                            break;

                        default : break;
                    }
                    validation = validation.withMessage(validtn.message)

                    if(validtn.bail) {
                        validation = validation.bail()
                    }
                });

                validationArr.push(validation);
            }
        });
        return validationArr;
    }
}