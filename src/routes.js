const express = require('express');

const userRoutes = require('./modules/user/routes/user.routes');
const eventRoutes = require('./modules/events/routes/events.routes');
const Auth = require('./shared/middleware/AuthMiddleware');

const routes = express.Router();

routes.get('/test', (req,res) => {
    res.json({
        msg : 'Hello!'
    })
});

routes.use('/user', userRoutes);
routes.use('/event', Auth.verifyToken, eventRoutes);

module.exports = routes ;