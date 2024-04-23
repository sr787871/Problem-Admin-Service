const express = require('express');

const v1Router = require("./v1");

const apiRouter = express.Router();


// If any request comes and route continues with /vi, we map it to v1Router
apiRouter.use('/v1',v1Router);

module.exports = apiRouter;