const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../api/routes/v1');
const { logs } = require('./vars');
const error = require('../api/middlewares/error');

const app = express();

app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// use HTTP verbs where not supported
app.use(methodOverride());

// compress response bodies
app.use(compress());

// secure http headers
app.use(helmet());

// enable cors
app.use(cors());

// mount api v1 routes
app.use('/v1', routes);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
