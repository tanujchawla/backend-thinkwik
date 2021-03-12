const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./src/db/mongoose');
const routes = require('./src/routes');
const httpNotFound = require('./src/exceptions/HttpNotFound');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// Routes
app.use('/api/v1', routes);

// If route does not exist
app.use(httpNotFound);

const port = process.env.PORT || 3050;
app.set("port", port);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});