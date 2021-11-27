const Binance = require("node-binance-api");
const binance = new Binance().options({
  APIKEY : 'uZ7blp8dQHmn1WQjJNeSo1US7dywAkcnmjmvEZlyTchKfS1PyfFQ2hGQ9NbU0jdq',
  APISECRET : 'dDlzGlDeFqseBZ9LgH9ZqcTqZcrPKEiZOFeOe8Se8fMymd8XuPTpxaEu5pkQd1Eq',
  useServerTime: true,
  test:true
});


// const restClient = new GeminiAPI({key,secret, sandbox:true});

module.exports = {
    marketBuy: function marketBuy (symbol) {
        return restClient.newOrder({amount:1,
          price:60000,
          side:"buy",
          symbol:symbol,
          options:["immediate-or-cancel"]})
      },

    marketSell: function marketSell (symbol) {
        return restClient.newOrder({amount:1,
          price:59700,
          side:"sell",
          symbol:symbol,
          options:["immediate-or-cancel"]})
      },
    symbolPrice: function (symbol) {
        return binance.prices(symbol, (error, ticker) => {
          console.info("Price of:", ticker);
          console.log(error);
        });
    }      
      
}