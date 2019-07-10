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

  async getAvailableMethods(exchangeId) {
    const exchange = getExchangeInstance(exchangeId);
    return exchange.has;
  }

  async createMarketOrder(exchangeId, params) {}

  async createLimitOrder(exchangeId, params) {}

  async createOrder(
    exchangeId,
    { symbol, type, side, amount, price, extraParams }
  ) {
    const exchange = getExchangeInstance(exchangeId);
    return exchange.createOrder(symbol, type, side, amount, price, extraParams);
  }
}

module.exports = new ExchangeService();
