const express = require('express');
const exchangeService = require('../services/exchangesService');

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

router.get('/:exchange/get-markets', async (req, res) => {
  const exchangeId = req.params.exchange;
  const markets = await exchangeService.loadMarkets(exchangeId);

  res.status(200).json({
    message: exchangeId,
    markets
  });
});

router.get('/:exchange/get-methods', async (req, res) => {
  const exchangeId = req.params.exchange;
  const methods = await exchangeService.getAvailableMethods(exchangeId);

  res.status(200).json({
    message: exchangeId,
    methods
  });
});

module.exports = router;
