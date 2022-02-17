const {Spot} = require('@binance/connector')
require('dotenv').config()
const fetch = require("node-fetch").default;
global.fetch = fetch;
//const axios = require('axios');
//Binance API Key
const apiKey = process.env.API_KEY
//Binance secret
const apiSecret = process.env.API_SECRET
//Binance Test nest 
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision'})



// const restClient = new GeminiAPI({key,secret, sandbox:true});

module.exports = {
    marketBuy: function marketBuy(symbol) {
     client.newOrder(symbol, 'BUY', 'LIMIT', {
        price: '350',
        quantity: 1,
        timeInForce: 'GTC'
     })
     .then(response => client.logger.log(response.data))
     .catch(error => client.logger.error(error))
    },

    marketSell: function marketSell (symbol) {
         client.newOrder(symbol, 'SELL', 'LIMIT', {
          price: '350',
          quantity: 1,
          timeInForce: 'GTC'
       })
       .then(response => client.logger.log(response.data))
       .catch(error => client.logger.error(error))
      },
    symbolPrice: function (symbol) {
      
      return client.tickerPrice(symbol)
      .then(response => client.logger.log(response.data.price))
      .catch(error => client.logger.error(error))
      
    },
    cancelOrder: function (symbol, id){
      client.cancelOrder(symbol, {
          orderId: id
         }).then(response => client.logger.log(response.data))
           .catch(error => client.logger.error(error))
    },
    allTrades: function (symbol) {
      client.myTrades(symbol)
      .then(response => client.logger.log(response.data))
      .catch(error => client.logger.error(error))
    },
    
    allOpenOrders: function (symbol) {
      client.cancelOpenOrders(symbol, {
        recvWindow: 5000
      }).then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error))
    },

    accountBalance: function  ()  {
      client.account()
      .then(response => client.logger.log(response.data))
      .catch(error => client.logger.error(error))
    },
      
}