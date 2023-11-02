export = BitcoinPriceFeedReader;
declare class BitcoinPriceFeedReader extends Reader {
    /**
     * Read the latest price of trading pair.
     *
     * @param {Pair} pair
     * @returns {Promise<number | null>}
     */
    getLatestPrice(pair: Pair): Promise<number | null>;
    /**
     * Read the latest price of trading pair in the format.
     *
     * @param {Pair} pair
     * @returns {Promise<TimestampedPrice | null>}
     */
    getLatestPriceTimestamped(pair: Pair): Promise<TimestampedPrice | null>;
    /**
     * Read the past candles of a given trading pair and period.
     *
     * @param {Pair} pair
     * @param {Period} period
     * @returns {Promise<Candle[] | null>}
     */
    getPastCandles(pair: Pair, period: Period): Promise<Candle[] | null>;
    /**
     * Read the daily candles of a trading pair.
     *
     * @param {Pair} pair
     * @returns {Promise<Candle[] | null>}
     */
    getPastDayCandles(pair: Pair): Promise<Candle[] | null>;
    /**
     * Read the weekly candles of a trading pair.
     *
     * @param {Pair} pair
     * @returns {Promise<Candle[] | null>}
     */
    getPastWeekCandles(pair: Pair): Promise<Candle[] | null>;
    /**
     * Read the weekly candles of a trading pair.
     *
     * @param {Pair} pair
     * @returns {Promise<Candle[] | null>}
     */
    getPastMonthCandles(pair: Pair): Promise<Candle[] | null>;
    /**
     * @param {Pair} pair
     * @param {(price: number) => void} callback
     */
    subscribeLatestPrice(pair: Pair, callback: (price: number) => void): () => void;
    /**
     * @param {Pair} pair
     * @param {(candles: Candle[]) => void} callback
     */
    subscribePastDayCandles(pair: Pair, callback: (candles: Candle[]) => void): () => void;
    /**
     * @param {Pair} pair
     * @param {(candles: Candle[]) => void} callback
     */
    subscribePastWeekCandles(pair: Pair, callback: (candles: Candle[]) => void): () => void;
    /**
     * @param {Pair} pair
     * @param {(candles: Candle[]) => void} callback
     */
    subscribePastMonthCandles(pair: Pair, callback: (candles: Candle[]) => void): () => void;
}
declare namespace BitcoinPriceFeedReader {
    export { Pair, Period, TimestampedPrice, Candle };
}
import { Reader } from "@synonymdev/feeds";
type Pair = 'BTCUSD' | 'BTCEUR' | 'BTCUST' | 'BTCGBP' | 'BTCJPY';
type TimestampedPrice = {
    price: number;
    timestamp: number;
};
type Period = '1D' | '1W' | '1M';
type Candle = {
    timestamp: number;
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
};
//# sourceMappingURL=reader.d.ts.map