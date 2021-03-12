const mongoose = require('mongoose');
const schemaOptionsConfig = require('../../../../config/schemaOptions.config');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    place: {
        type: String
    },
    user_id: {
        type : String
    },
    // currently storing participants here assuming number of participants won't be huge
    participants: {
        type: [{
            type : Schema.Types.ObjectId,
            ref : 'users'
        }]
    },
    max_participants: {
        type: Number
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

const User = mongoose.model('events', EventSchema);

module.exports = User;