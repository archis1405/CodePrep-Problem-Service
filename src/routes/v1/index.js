const express = require('express');

const ProblemRouter = require('./problem.routes');

const v1Router = express.Router();

//If any request comes and routes continue with /problems we map it to ProblemRouter
v1Router.use('/problems', ProblemRouter);

module.exports = v1Router;
