const express = require('express');
const exchangeService = require('../services/exchangesService');

const router = express.Router();

router.get('/:exchange/get-markets', async (req, res) => {
  const exchangeId = req.params.exchange;
  const markets = await exchangeService.loadMarkets(exchangeId);

  res.status(200).json({
    message: exchangeId,
    markets
  });
});

router.get('/:exchange/get-balance', async (req, res) => {
  const exchangeId = req.params.exchange;
  const balance = await exchangeService.getBalance(exchangeId);

  res.status(200).json({
    message: exchangeId,
    balance
  });
});

module.exports = router;
