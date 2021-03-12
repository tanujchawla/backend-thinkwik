const commonFunctions = require('./../shared/utils/commonFunctions');
const messages = require('./../lang/en/error_messages');

// Custom HTTP Not Found Exception 

module.exports = (req, res) => {
    return commonFunctions.createErrorResponse(req, res, messages.resource_not_found, messages.codes.resource_not_found);
};