const User = require('./../../user/models/User');

module.exports = {
    CREATE : [
        {
            name : 'title',
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
                    params : '2,60',
                    message : 'invalid'
                },
            ]
        },
        {
            name : 'description',
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
                    params : '2,100',
                    message : 'invalid'
                },
            ]
        },
        {
            name : 'date',
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
                }
            ]
        },
        {
            name : 'time',
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
                    name : 'pattern',
                    message : 'invalid',
                    pattern : /^[0-9]{4}$/,
                    bail : true
                },
                {
                    name : 'custom',
                    message : 'invalid',
                    callback : (value) => {
                        if(Number(value) > 2400) {
                            return Promise.reject('invalid')
                        }
                        return true;
                    }
                }
            ]
        },
        {
            name : 'place',
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
                    params : '2,200',
                    message : 'invalid'
                }
            ]
        },
        {
            name : 'user_id',
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
        },
        {
            name : 'participants',
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
                    name : 'isArray',
                    message : 'invalid',
                    bail  : true
                }
            ]
        },
        {
            name : 'max_participants',
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
                    name : 'integer',
                    message : 'invalid',
                    bail  : true
                }
            ]
        }
    ]
}