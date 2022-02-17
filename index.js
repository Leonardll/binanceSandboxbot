const fetch = require("node-fetch").default;
global.fetch = fetch;

const exchange = require("./exchange.js") 
 
const movingAverage = require("./indicators/movingAverage.js")

movingAverage.hourlyMovingAverage("BTC","USD",150, function(result) {
  console.log("MA HRS: ", result)
})
movingAverage.dailyMovingAverage("BTC","USD",200, function(result2) {
  console.log("MA Day: ", result2)
})
movingAverage.minuteMovingAverage("BTC","USD",200, function(result3) {
  console.log("MA min: ", result3)
})


var strategy =  function() {
  console.log('       ')
  console.log('=================')
  console.log("Excuting Strategy");
  movingAverage.hourlyMovingAverage("BTC","USD",150,  function(result) {
    //const price = movingAverage.tickerPrice('BTC','USD')
    async function getPrice() {
      const price = await movingAverage.tickerPrice('BTC','USD');
      console.log('Price', price);
    }
    getPrice();
    //console.log('Price', price);
    //const price = movingAverage.tickerPrice('BTC','USD')

 //async () => { return await movingAverage.tickerPrice('BTC','USD')}
//     const getPrice = async () => {
//      movingAverage.tickerPrice('BTC','USD')
//       return Promise.all()
//     }
//     getPrice().then(resp => console.log(resp))
//               .catch(error => console.log(error)) 
    console.log("MA HRS: ", result); 
    //console.log('Price', price);  
    setTimeout(strategy, 1000)
  
  //.catch(error => console.log(error));
  
 
    
  })
 
  
}

strategy()

//exchange.marketBuy('BNBUSDT')
//exchange.cancelOrder('BNBUSDT', 7216)
//exchange.allTrades('BNBUSDT')
//exchange.allOpenOrders('BNBUSDT')
//exchange.accountBalance()
//exchange.marketSell('BNBUSDT')
//console.log(tulind.indicators.sma)



//client.avgPrice('BTCUSDT').then(response => client.logger.log(response.data))
//client.exchangeInfo().then(response => client.logger.log(response.data))
// client.exchangeInfo({ symbol: 'btcusdt' }).then(response => client.logger.log(response.data))
// client.exchangeInfo({ symbols: ['btcusdt', 'BNBUSDT'] }).then(response => client.logger.log(response.data))

//client.account().then(response => client.logger.log(response.data))

// client.cancelOrder('BNBUSDT', {
//   orderId: 6461611
// }).then(response => client.logger.log(response.data))
//   .catch(error => client.logger.error(error))

// client.ticker24hr('ETHUSDT').then(response => client.logger.log("ETH Price",response.data))
// client.trades('BTCUSDT', { limit: 5 }).then(response => client.logger.log(response.data))
//   .catch(error => client.logger.error(error))
// setInterval(() => {
//   console.log("===========")
//   client.bookTicker('BTCUSDT').then(response =>  client.logger.log("BTCUSDT price",response.data)) 
// }, 2000);


// client.historicalTrades('BTCUSDT', { limit: 10 }).then(response => client.logger.log("BTC Historic",response.data))
//   .catch(error => client.logger.error(error.message))

//   client.myTrades('ALL').then(response => client.logger.log(response.data))
//   .catch(error => client.logger.error(error))

// client.newOrder('BNBUSDT', 'BUY', 'LIMIT', {
//   price: '350',
//   quantity: 1,
//   timeInForce: 'GTC'
// }).then(response => client.logger.log(response.data))
//   .catch(error => client.logger.error(error))
// client.tickerPrice().then(response => client.logger.log(response.data))
// client.ticker24hr().then(response => client.logger.log(response.data))

// client.ticker24hr('BTCUSDT').then(response => client.logger.log(response.data))

// async function ticker()  {
//    let ticker = await binance.prices()
//    .catch(error => console.log(error)) 
//    console.info(`Price of BNB: ${ticker.BNBUSDT}`)
//   .catch(error => console.log(error))
//  }
//  ticker();


// const Binance = require("node-binance-api");
// const binance = new Binance().options({
//   APIKEY : 'uZ7blp8dQHmn1WQjJNeSo1US7dywAkcnmjmvEZlyTchKfS1PyfFQ2hGQ9NbU0jdq',
//   APISECRET : 'dDlzGlDeFqseBZ9LgH9ZqcTqZcrPKEiZOFeOe8Se8fMymd8XuPTpxaEu5pkQd1Eq',
//   useServerTime: true,
//   test:true,
//   verbose: true, // Add extra output when subscribing to WebSockets, etc
  
//   urls: {
//   base: "https://testnet.binance.vision/api/", // remove this to trade on mainnet
//   combineStream: 'wss://testnet.binance.vision/stream?streams=',
//   stream: 'wss://testnet.binance.vision/ws/'
//   }
// });


// const indicators = require("./indicators.js");
// const exchange = require("./exchange");

// async function balance () {
//   await binance.useServerTime(); 
// }
// balance();
// binance.balance((error, balances) => {
//   if ( error ) return console.error(error);
//   console.info("balances()", balances);
//   console.info("ETH balance: ", balances.ETH.available);
// });


// async function ticker()  {
//   let ticker = await binance.prices()
//   .catch(error => console.log(error)) 
//   console.info(`Price of BNB: ${ticker.BNBUSDT}`)
  //.catch(error => console.log(error))
// }
// ticker();

// var strategy = function(){

//   hasPosition = false;
// If BTC < MA ==> buy (if we have no position)
// If BTC > MA ==> sell (if we have no position)
// console.log("===========");
//   console.log("Excecuting strategy");
//    indicators.movingAverage("BTC","USD",100, function(result){
//    exchange.symbolPrice("btcusd")
//    .then(res => {
//     var price = res.last;

//     console.log("MA HRS BTC", result);
//     console.log("BTC price",price)

//     if(price < result && !hasPosition) {
//       exchange.marketBuy("BTC")
//       .then(res => {
//         console.log("Buy successful");
//         hasPosition = true;
//         setTimeout(strategy,1000);

//       })
//       .catch(error => console.log(error))
//     } else if(price > result && hasPosition){
//       console.log("Sell!");
//       exchange.marketSell("BTC")
//       .then(res => {
//         console.log("Sell successful")
//         hasPosition = false;
//         setTimeout(strategy,1000);

//       })
//       .catch(error => console.log(error))
//     } else {
//       console.log("Hold");
//       setTimeout(strategy,1000);

//     }


//    });
//  });
  
// }
// strategy();










// exchange.marketBuy("btcusd")
// .then(response => console.log(response))
// .catch(error => console.log(error))

//100 hour MA
// indicators.movingAverage("BTC","USD",100, function(result){
//   console.log("MA HRS BTC", result);
// });
// indicators.movingAverageDay("BTC","USD",31, function(result){
//   console.log("MA DAY BTC", result);
// });
// indicators.movingAverageMinute("BTC","USD",1000, function(result){
//   console.log("MA Minutes BTC", result);
// });
// indicators.movingAverage("ETH","USD",100, function(result){
//   console.log("MA HRS ETH", result);
// });
//1 get data from CC
//2 calculate MA from 100 past hours
//3 check continuously if price is crossing 100 MA => BUY/SELL/HOLD

//1


//2


// CryptoCompareAPI.price('BTC', ['USD', 'EUR'])
// .then(prices => {
//   console.log(prices)
// })
// .catch(console.error);


//request price list
// CryptoCompareAPI.coinList()
// .then(coinList => {
//   console.log(coinList)
// })
// .catch(console.error);

// const account = "primary";
// const balances = await restClient.getAvailableBalances({ account });
// console.log(balances);

// restClient.newOrder({amount:10,price:100,side:"buy",symbol:"btcusd"})
// .then(response => console.log(response))
// .catch(error => console.log(error))

// restClient.newOrder({amount:10,price:100,side:"buy",symbol:"ethusd"})
// .then(response => console.log(response))
// .catch(error => console.log(error))

// restClient.newOrder({amount:10,price:100,side:"buy",symbol:"bchusd"})
// .then(response => console.log(response))
// .catch(error => console.log(error))

// restClient.getMyActiveOrders()
// .then(response => console.log(response))
// .catch(error => console.log(error));

//const balances = await client.getAvailableBalances({ account });
// restClient.cancelAllActiveOrders()
// .then(response => console.log(response))
// .catch(error => console.log(error));

//  restClient.getMyAvailableBalances()
//  .then(response => console.log(response))
//  .catch(error => console.log(error));