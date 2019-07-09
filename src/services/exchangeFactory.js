const ccxt = require('ccxt');
const exchanges = [];

const exchangeExists = exchange => {
  // TODO: Validate if exchange exists
  return false;
};

const getExchangeInstance = exchangeId => {
  if (exchangeExists(exchangeId)) {
    return exchanges[exchangeId];
  }

  const exchangeId = 'binance';
  const exchangeClass = ccxt[exchangeId];
  const exchange = new exchangeClass({
    apiKey: 'YOUR_API_KEY',
    secret: 'YOUR_SECRET',
    timeout: 30000,
    enableRateLimit: true
  });
};

module.exports = { getExchangeInstance, exchangeExists };
