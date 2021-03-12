module.exports = {
    codes : {
        bad_request            : 400,
        method_not_supported   : 405,
        resource_not_found     : 404,
        action_failed          : 500,
        authentication_failed  : 401,
        authentication_required: 401
    },
    required : {
        type : 'FIELD_REQUIRED',
        message: 'This action requires the field to be specified.'
    },
    invalid : {
        type : 'FIELD_INVALID',
        message: 'The value of the field is invalid.'
    },
    invalid_string :  {
        type : 'FIELD_INVALID',
        message: 'The value of the field must be a valid string.'
    },
    invalid_number :  {
        type : 'FIELD_INVALID',
        message: 'The value of the field must be a valid number.'
    },
    invalid_boolean :  {
        type : 'FIELD_INVALID',
        message: 'The value of the field must be boolean.'
    },
    duplicate : {
        type : 'FIELD_DUPLICATE',
        message : 'The value of the field is already used for another resource.'
    },
    action_failed : {
        type : 'ACTION_FAILED',
        message :  'The server failed to perform this action for unknown internal reason.'
    },
    authentication_failed : {
        type   : 'AUTHENTICATION_FAILED',
        message: 'Used authentication credentials are invalid.'
    },
    authorization_required : {
        type   : 'AUTHENTICATION_REQUIRED',
        message: 'You need authorization to perform this action.'
    },
    resource_not_found : {
        type   : 'RESOURCE_NOT_FOUND',
        message: 'Resource does not exist or has been removed.'
    },
    invalid_participants : {
        type : 'FIELD_INVALID',
        parameter : 'participants',
        message: 'Participants cannot be more than maximum allowed participants.'
    },
};