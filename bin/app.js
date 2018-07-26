const config = require('getconfig');
const Logger = require('logger');
const expressXRequestId = require('express-x-request-id');
const expressRoutes = require('../src/routes');
require('dotenv').config({silent: true});

const express = require('express');
const app = express();

app.use(expressXRequestId.requestMiddleware);
app.use(expressXRequestId.responseMiddleware);
app.use(Logger.injectLogger());
app.use(Logger.injectRequestLogger());
app.use(expressRoutes);
app.use((req, res, next) => res.sendStatus(404));

const logger = Logger.newInstance();
const port = config.port;
app.listen(port, () => logger.info(`Listening on port ${port}...`));
