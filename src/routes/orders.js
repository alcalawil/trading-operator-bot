const express = require('express');
const router = express.Router();

router.get('/:exchange/get-markets', (req, res) => {
  const exchange = req.params.exchange;
  res.status(200).json({
    message: exchange
  });
});

module.exports = router;
