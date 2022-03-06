import { Market, MarketInformation, updatePriceMap, debugPrint } from '../src/types';

describe('tests', () => {
  it('basic test', async () => {
    const btcInformation: MarketInformation = {
      market: Market.BTC_USD,
      exchangePrices: {
        coinbase: {
          ts: new Date('2021-12-17T23:00:00.000Z'),
          lastPrice: 49000,
          marketId: '1',
        },
        ftx: {
          ts: new Date('2021-12-17T23:00:00.000Z'),
          lastPrice: 49800,
          marketId: '2',
        },
      },
    };

    const newData: MarketInformation = {
      market: Market.BTC_USD,
      exchangePrices: {
        coinbase: {
          ts: new Date('2021-12-17T22:59:00.000Z'),
          lastPrice: 48900,
          marketId: '1',
        },
        ftx: {
          ts: new Date('2021-12-17T23:00:01.000Z'),
          lastPrice: 49900,
          marketId: '2',
        },
      },
    };

    expect(btcInformation.market).toEqual(Market.BTC_USD);
    expect(btcInformation.exchangePrices.coinbase.lastPrice).toEqual(49000);
    expect(btcInformation.exchangePrices.ftx.lastPrice).toEqual(49800);

    // iterating over the keys of the exchangePrices
    Object.keys(btcInformation.exchangePrices).forEach((exchange: string) => {
      expect([
        'coinbase',
        'ftx',
      ].includes(exchange));
    });

    debugPrint(btcInformation);
    console.log(updatePriceMap(newData, btcInformation));
  });
});
