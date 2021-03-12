const CommonFunctions = require('./../../../shared/utils/commonFunctions');
const FIELDS = require('./../../../../config/fields');
const Event = require('../models/Event');
const ERRORS = require('../../../lang/en/error_messages');

module.exports = {
    
    create (req, res) {
        try {
            // to pass only allowed fields to db
            const eventData = CommonFunctions.filterObj(req.body, FIELDS.create_event);

            if(eventData.participants.length > eventData.max_participants) {
                return CommonFunctions.createErrorResponse(req, res, ERRORS.invalid_participants, ERRORS.codes.bad_request);
            }

            let newEvent = new Event(eventData);

            newEvent.save()
                .then(data => {
                    return CommonFunctions.createSuccessResponse(req, res, data, 201);
                })
                .catch(err => {
                    return CommonFunctions.createErrorResponse(req, res, err);
                })

        } catch (error) {
            return CommonFunctions.createErrorResponse(req, res, error);
        }
    }
}