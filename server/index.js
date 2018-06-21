/*
(1)
app inits:
*/
const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db').db;


/*
(2)
"Enhancing" middleware (does not send response, server-side effects only)
*/
app.use(volleyball); // logging middleware (b/c timestamp - want that first)

app.use(bodyParser.json()); // parsing middleware

app.use(bodyParser.urlencoded({extended: true})); // to parse static front-end e.g. forms


/*
(3)
routing middleware
*/
app.use('/api', require('./routes'));


/*
(4)
static file-serving middleware
*/
app.use(express.static(path.join(__dirname, '..', 'public')));

/*
(5)
"edge case" middleware
*/
// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});


/*
(6)
error-handling middleware
*/
app.use((err, req, res, next) => {
  console.log(err.stack);  // stack trace
  res.status(err.status || 500);
  res.send(err.message || 'Internal server error');
});


module.exports = app;
