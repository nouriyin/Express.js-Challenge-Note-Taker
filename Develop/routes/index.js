const express = require('express');

const tipsRouter = require('./tips');

const app = express();

app.use('/notes', tipsRouter);

module.exports = app;