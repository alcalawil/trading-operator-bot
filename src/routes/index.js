const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Operator bot says hello'
  });
});

router.get('/time', (req, res) => {
  res.status(200).json({
    date: new Date().toISOString()
  });
});

module.exports = router;
