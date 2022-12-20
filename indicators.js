const CCKey = process.env.CRYPTOCOMPAREAPI;
const CryptoCompareAPI = require("cryptocompare");
CryptoCompareAPI.setApiKey(CCKey);

module.exports = {
  movingAverage: function movingAverage(
    cryptoAsset,
    fiatCurrensy,
    hours,
    callback
  ) {
    if (hours > 169) {
      console.error("Only up to 169 hrs allowed");
      return;
    }

    CryptoCompareAPI.histoHour(cryptoAsset, fiatCurrensy)
      .then((data) => {
        data = data.reverse();
        var sum = 0;
        for (var i = 0; i < hours; i++) {
          sum += data[i].close;
          // console.log(i)
          // console.log(data[i].close)
        }
        // console.log(data[0])
        // console.log(data.lenght)
        // -> [ { time: 1487448000,
        //        close: 1060.34,
        //        high: 1061.44,
        //        low: 1058.85,
        //        open: 1059.24,
        //        volumefrom: 739.6,
        //        volumeto: 790019.22 },
        //        ... ]
        var movingAverage = Math.floor(sum / hours);
        callback(movingAverage);
      })
      .catch(console.error);
  },
  movingAverageDay: function movingAverageDay(
    cryptoAsset,
    fiatCurrensy,
    days,
    callback
  ) {
    if (days > 365) {
      console.error("Only up to 365 days allowed");
      return;
    }

    CryptoCompareAPI.histoDay(cryptoAsset, fiatCurrensy)
      .then((data) => {
        data = data.reverse();
        var sum = 0;
        for (var i = 0; i < days; i++) {
          sum += data[i].close;
          // console.log(i)
          // console.log(data[i].close)
        }
        // console.log(data[0])
        // console.log(data.lenght)
        // -> [ { time: 1487448000,
        //        close: 1060.34,
        //        high: 1061.44,
        //        low: 1058.85,
        //        open: 1059.24,
        //        volumefrom: 739.6,
        //        volumeto: 790019.22 },
        //        ... ]
        var movingAverage = sum / days;
        callback(movingAverage);
      })
      .catch(console.error);
  },
  movingAverageMinute: function movingAverageMinute(
    cryptoAsset,
    fiatCurrensy,
    minute,
    callback
  ) {
    if (minute > 1440) {
      console.error("Only up to 1440 min allowed");
      return;
    }

    CryptoCompareAPI.histoMinute(cryptoAsset, fiatCurrensy)
      .then((data) => {
        data = data.reverse();
        var sum = 0;
        for (var i = 0; i < minute; i++) {
          sum += data[i].close;
          // console.log(i)
          // console.log(data[i].close)
        }
        // console.log(data[0])
        // console.log(data.lenght)
        // -> [ { time: 1487448000,
        //        close: 1060.34,
        //        high: 1061.44,
        //        low: 1058.85,
        //        open: 1059.24,
        //        volumefrom: 739.6,
        //        volumeto: 790019.22 },
        //        ... ]
        var movingAverage = sum / minute;
        callback(movingAverage);
      })
      .catch(console.error);
  },
};
