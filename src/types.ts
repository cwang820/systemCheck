// This is an example of renaming a type. In this case we are clarifying that this string
// will be an ISO like 2021-12-17T23:00:00.000Z.
export type IsoString = string;

// This is an example of an enum in Typescript.
export enum Market {
  BTC_USD = 'BTC-USD',
  ETH_USD = 'ETH-USD',
  SOL_USD = 'SOL-USD',
}

// This is an example of a hashMap as dYdX uses them.
export type PriceMap = { [exchange: string]: { ts: Date, lastPrice: number, marketId: string } };

// This is an example of an interface, a Typescript concept we often use for
// objects that are common throughout repos.
// NOTE: interfaces can extend other interfaces.
export interface MarketInformation {
  market: Market;
  exchangePrices: PriceMap;
}

export function debugPrint(market: MarketInformation) : void{
  console.log(`Object.keys(market.exchangePrices).length: ${Object.keys(market.exchangePrices).length}`);
  console.log(`Object.values(market.exchangePrices).length: ${Object.values(market.exchangePrices).length}`);
  console.log(`Object.entries(market.exchangePrices).length: ${Object.entries(market.exchangePrices).length}`);
  console.log(`Array.isArray(market.exchangePrices): ${Array.isArray(market.exchangePrices)}`);
  console.log(`market.exchangePrices.length: ${market.exchangePrices.length}`);
  console.log(`typeof(market.exchangePrices): ${typeof (market.exchangePrices)}`);
  console.log(`market.exchangePrices.coinbase: ${market.exchangePrices.coinbase}`);
  console.log(`market.exchangePrices['coinbase']: ${market.exchangePrices['coinbase']}`);
}

export function updatePriceMap(newData: MarketInformation, market: MarketInformation) : MarketInformation{
//  assert(newData.market == market.market);
//  assert(newData.exchangePrices.length == 1)
  let updatedData : MarketInformation = market;
  Object.keys(newData.exchangePrices).forEach((exchange: string) => {
    if (newData.exchangePrices[exchange].ts > updatedData.exchangePrices[exchange].ts) {
      updatedData.exchangePrices[exchange] = newData.exchangePrices[exchange];
      console.log(`${exchange}: ${updatedData.exchangePrices[exchange]}`);
    }
  });
  return updatedData;
}
