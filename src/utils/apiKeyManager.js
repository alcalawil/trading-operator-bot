const config = process.env;

const API_KEYS = {
  binance: {
    apiKey: config.BINANCE_KEY,
    secret: config.BINANCE_SECRET
  },
  bitmex: {
    apiKey: config.BITMEX_KEY,
    secret: config.BITMEX_SECRET
  }
};

const getApiKey = exchangeId => {
  return API_KEYS[exchangeId];
};

module.exports = { getApiKey };
