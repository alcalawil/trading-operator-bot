const express = require('express');
const exchangeService = require('../services/exchangesService');
const { validateOrderParams } = require('../utils/validators');

const router = express.Router();

router.post('/:exchange/create', async (req, res) => {
  const params = validateOrderParams(req.body.params);
  const exchangeId = req.params.exchange;
  const markets = await exchangeService.loadMarkets(exchangeId, params);

  res.status(200).json({
    message: exchangeId,
    markets
  });
});

module.exports = router;
