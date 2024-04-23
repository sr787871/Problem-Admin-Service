const express = require('express');

const problemRouter = require("./problems.routes");

const v1Router = express.Router();

// If any request comes and route continues with /problems, we map it to v1Router

v1Router.use('/problems',problemRouter);

module.exports = v1Router;