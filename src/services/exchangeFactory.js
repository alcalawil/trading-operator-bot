const ccxt = require('ccxt');
const { getApiKey } = require('../utils/apiKeyManager');
const exchanges = [];

const exchangeInstanceExists = exchangeId => {
  return exchanges.includes(exchangeId);
};

const getExchangeInstance = exchangeId => {
  if (exchangeInstanceExists(exchangeId)) {
    return exchanges[exchangeId];
  }

  const { apiKey, secret } = getApiKey(exchangeId);
  const Exchange = ccxt[exchangeId];
  const exchangeInstance = new Exchange({
    apiKey,
    secret,
    timeout: 30000,
    enableRateLimit: true
  });

  exchanges[exchangeId] = exchangeInstance;

  return exchangeInstance;
};

module.exports = { getExchangeInstance, exchangeInstanceExists };
