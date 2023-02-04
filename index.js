//1 get data from CC
//2 calculate MA from 100 past hours
//3 check continuously if price is crossing 100 MA => BUY/SELL/HOLD

const fetch = require("node-fetch").default;
global.fetch = fetch;

const exchange = require("./exchange.js");

const movingAverage = require("./indicators/movingAverage.js");

movingAverage.hourlyMovingAverage("BTC", "USD", 150, function (result) {
  console.log("MA HRS: ", result);
});
movingAverage.dailyMovingAverage("BTC", "USD", 200, function (result2) {
  console.log("MA Day: ", result2);
});
movingAverage.minuteMovingAverage("BTC", "USD", 200, function (result3) {
  console.log("MA min: ", result3);
});

var strategy = function () {
  console.log("       ");
  console.log("=================");
  console.log("Excuting Strategy");
  movingAverage.hourlyMovingAverage("BTC", "USD", 150, function (result) {
    //const price = movingAverage.tickerPrice('BTC','USD')
    async function getPrice() {
      const price = await movingAverage.tickerPrice("BTC", "USD");
      console.log("Price", price);
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
    setTimeout(strategy, 1000);

    //.catch(error => console.log(error));
  });
};

strategy();
