const ccxt = require('ccxt');

class ExchangeService {
  constructor(exchangeId) {
    this.exchangeId = exchangeId;
  }
}

let kraken = new ccxt.kraken();
let bitfinex = new ccxt.bitfinex({ verbose: true });
let huobipro = new ccxt.huobipro();
let okcoinusd = new ccxt.okcoinusd({
  apiKey: 'YOUR_PUBLIC_API_KEY',
  secret: 'YOUR_SECRET_PRIVATE_KEY'
});

const exchangeId = 'binance',
  exchangeClass = ccxt[exchangeId],
  exchange = new exchangeClass({
    apiKey: 'YOUR_API_KEY',
    secret: 'YOUR_SECRET',
    timeout: 30000,
    enableRateLimit: true
  });

console.log(kraken.id, await kraken.loadMarkets());
