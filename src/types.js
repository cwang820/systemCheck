"use strict";
exports.__esModule = true;
exports.updatePriceMap = exports.debugPrint = exports.Market = void 0;
// This is an example of an enum in Typescript.
var Market;
(function (Market) {
    Market["BTC_USD"] = "BTC-USD";
    Market["ETH_USD"] = "ETH-USD";
    Market["SOL_USD"] = "SOL-USD";
})(Market = exports.Market || (exports.Market = {}));
function debugPrint(market) {
    console.log("Object.keys(market.exchangePrices).length: ".concat(Object.keys(market.exchangePrices).length));
    console.log("Object.values(market.exchangePrices).length: ".concat(Object.values(market.exchangePrices).length));
    console.log("Object.entries(market.exchangePrices).length: ".concat(Object.entries(market.exchangePrices).length));
    console.log("Array.isArray(market.exchangePrices): ".concat(Array.isArray(market.exchangePrices)));
    console.log("market.exchangePrices.length: ".concat(market.exchangePrices.length));
    console.log("typeof(market.exchangePrices): ".concat(typeof (market.exchangePrices)));
    console.log("market.exchangePrices.coinbase: ".concat(market.exchangePrices.coinbase));
    console.log("market.exchangePrices['coinbase']: ".concat(market.exchangePrices['coinbase']));
}
exports.debugPrint = debugPrint;
function updatePriceMap(newData, market) {
    //  assert(newData.market == market.market);
    //  assert(newData.exchangePrices.length == 1)
    var updatedData = market;
    Object.keys(newData.exchangePrices).forEach(function (exchange) {
        if (newData.exchangePrices[exchange].ts > updatedData.exchangePrices[exchange].ts) {
            updatedData.exchangePrices[exchange] = newData.exchangePrices[exchange];
            console.log("".concat(exchange, ": ").concat(updatedData.exchangePrices[exchange]));
        }
    });
    return updatedData;
}
exports.updatePriceMap = updatePriceMap;
