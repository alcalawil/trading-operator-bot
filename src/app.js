const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRoute = require('./routes/index');
const ordersRoute = require('./routes/orders');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/', indexRoute);
app.use('/orders', ordersRoute);

app.use((req, res, next) => {
  let err = new Error('Route not found');
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
