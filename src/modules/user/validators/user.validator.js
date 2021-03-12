const User = require('./../models/User');

module.exports = {

    SIGNUP : [
        {
            name : 'email',
            paramIn : 'body',
            validations : [
                {
                    name : 'required',
                    message : 'required',
                    bail  : true
                },
                {
                    name : 'notEmpty',
                    message : 'required',
                    bail  : true
                },
                {
                    name : 'isEmail',
                    message : 'invalid',
                    bail  : true
                },
                {
                    name : 'custom',
                    callback : (value)  => {
                        return User.findUserByEmail(value)
                                .then(user => {
                                    if(user) {
                                        return Promise.reject('duplicate');  
                                    }
                                    return true;
                                });
                    },
                    message : 'duplicate'
                },
            ]
        },
        {
            name : 'password',
            paramIn : 'body',
            validations : [
                {
                    name : 'required',
                    message : 'required',
                    bail  : true
                },
                {
                    name : 'notEmpty',
                    message : 'required',
                    bail  : true
                },
                {
                    name : 'lengthRange',
                    params : '8,20',
                    message : 'invalid'
                },
            ]
        }
    ],
    SIGNIN : [
        {
            name : 'email',
            paramIn : 'body',
            validations : [
                {
                    name : 'required',
                    message : 'required',
                    bail  : true
                },
                {
                    name : 'notEmpty',
                    message : 'required',
                    bail  : true
                },
                {
                    name : 'isEmail',
                    message : 'invalid'
                }
            ]
        },
        {
            name : 'password',
            paramIn : 'body',
            validations : [
                {
                    name : 'required',
                    message : 'required',
                    bail  : true
                },
                {
                    name : 'notEmpty',
                    message : 'required',
                    bail  : true
                },
                {
                    name : 'lengthRange',
                    params : '8,20',
                    message : 'invalid'
                },
            ]
        }
    ],
    UPDATE: [
        {
            name : 'user_id',
            paramIn : 'param',
            validations : [
                {
                    name : 'required',
                    message : 'required',
                    bail  : true
                },
                {
                    name : 'notEmpty',
                    message : 'required',
                    bail :  true
                },
                {
                    name : 'pattern',
                    message : 'invalid',
                    pattern : /^[a-fA-F\d]{24}$/,
                    bail : true
                },
                {
                    name : 'custom',
                    message : 'invalid',
                    callback : (value) => {
                        return User.findById(value)
                            .then(user => {
                                if(!user) {
                                    return Promise.reject('invalid')
                                }
                                return true;
                            })
                    }
                }
            ]
        }
    ],
};