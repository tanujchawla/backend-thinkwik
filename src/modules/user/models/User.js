const mongoose = require('mongoose');
const schemaOptionsConfig = require('../../../../config/schemaOptions.config');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    dob: {
        type: String
    },
    gender: {
        type: String
    },
    image_path: {
        type: String
    },
    created_at: {
        type: Schema.Types.Mixed
    },
    updated_at: {
        type: Schema.Types.Mixed
    }
},
{
    ...schemaOptionsConfig
});

UserSchema.statics.findUserByEmail = function (email) {
    const User = this;
    
    return User.findOne({email : email})
            .then((user) => {
                return Promise.resolve(user);
            });
}

const User = mongoose.model('user', UserSchema);

module.exports = User;