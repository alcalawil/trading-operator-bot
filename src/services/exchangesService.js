const { getExchangeInstance } = require('./exchangeFactory');

class ExchangeService {
  async loadMarkets(exchangeId) {
    const exchange = getExchangeInstance(exchangeId);
    return exchange.loadMarkets();
  }
}

module.exports = new ExchangeService();
