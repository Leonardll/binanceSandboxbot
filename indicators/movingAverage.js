const tulind = require('tulind');
require('dotenv').config()
const fetch = require("node-fetch").default;
global.fetch = fetch;
const CCKey = process.env.CCAPI_Key
CryptoCompareAPI = require("cryptocompare");
CryptoCompareAPI.setApiKey(CCKey);


module.exports = {
    dailyMovingAverage: function myMovingAverage (cryptoAsset,currency,period, callback) {
     
    
      CryptoCompareAPI.histoDay(cryptoAsset, currency,{limit: 200})
    .then(data => { 
      // data = data.reverse()
      //console.log(data)
      const open = data.map( d => d.open)
      const high = data.map( d => d.high)
      const low = data.map( d => d.low)
      const close = data.map( d => d.close)
      //console.log(open)
    
    
     
     dayMovingAverage = tulind.indicators.sma.indicator([close],[period],(error,res) => {
         if (error) return log(error)
         //console.log(res)
         callback(res[0].slice(-1)[0])
         })
      //callback(movingAverage)   
     
     
    })
    .catch(console.error())
  },
    hourlyMovingAverage: function myMovingAverage (cryptoAsset,currency,period, callback) {
 
  CryptoCompareAPI.histoHour(cryptoAsset, currency)
.then(data => { 
  // data = data.reverse()
  //console.log(data[168])
  const open = data.map( d => d.open)
  const high = data.map( d => d.high)
  const low = data.map( d => d.low)
  const close = data.map( d => d.close)
  //console.log(open)


 
 movingAverage = tulind.indicators.sma.indicator([close],[period],(error,res) => {
     if (error) return log(error)
     //console.log(res)
     callback(res[0].slice(-1)[0])
     })
  //callback(movingAverage)   
 
 
})
.catch(console.error())


},   
    minuteMovingAverage: function myMovingAverageMinute (cryptoAsset,currency,period, callback) {
      
    
      CryptoCompareAPI.histoMinute(cryptoAsset, currency)
    .then(data => { 
      // data = data.reverse()
      //console.log(data.length)
      const open = data.map( d => d.open)
      const high = data.map( d => d.high)
      const low = data.map( d => d.low)
      const close = data.map( d => d.close)
      //console.log(open)
    
    
     
     minuteMovingAverage = tulind.indicators.sma.indicator([close],[period],(error,res) => {
         if (error) return log(error)
         //console.log(res)
         callback(res[0].slice(-1)[0])
         })
      //callback(movingAverage)   
     
     
    })
    .catch(console.error())
    //console.log(tulind.indicators.sma)

  },

   tickerPrice : async function getTickerPrice (pair1, pair2) {
    let prices = await CryptoCompareAPI.price(pair1, pair2);
    return prices;
  }
  //function getTickerPrice (pair1, pair2) {
  //   CryptoCompareAPI.price(pair1, pair2)
  //   .then(response => console.log(response))
  //   .then(price => {return price})
  //   .catch(console.error)
  // }
 
    
 

}

//1hr MA

//Data from CCompare

