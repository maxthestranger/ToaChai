const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const { logs } = require('./vars');

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

// enable cors
app.use(cors());

// secure http headers
app.use(helmet());

module.exports = app;
