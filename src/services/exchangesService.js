const { getExchangeInstance } = require('./exchangeFactory');

class ExchangeService {
  async loadMarkets(exchangeId) {
    const exchange = getExchangeInstance(exchangeId);
    return exchange.loadMarkets();
  }

  async getBalance(exchangeId) {
    const exchange = getExchangeInstance(exchangeId);
    return exchange.fetchBalance();
  }
}

module.exports = new ExchangeService();
