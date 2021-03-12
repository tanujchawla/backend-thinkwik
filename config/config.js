require('dotenv').config();

// Environment credentials

module.exports = { 
    NODE_ENV : process.env.NODE_ENV,
    MONGO_URI : process.env.MONGO_URI,
    JWT_KEY : process.env.JWT_KEY,
    JWT_TOKEN_EXPIRY_TIME : process.env.JWT_TOKEN_EXPIRY_TIME,
};