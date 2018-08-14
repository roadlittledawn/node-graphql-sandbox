const express = require('express');
const routes = require('./routes');

const app = express();

// Load routes.
routes(app);

module.exports = app;
