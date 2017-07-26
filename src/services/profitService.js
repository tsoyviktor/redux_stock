import {fetchOne, fetch} from '../services/APIservice';

/**
 * response JSON keys enum
 */
class KEYS {
  static CURRENT_PRICE = 'l_cur';
  static SYMBOL_KEY = 't';
}

/**
 * Profit as of the time request is done
 * @param item
 * @param currentPrice
 * @private
 */
const _getProfit = (item, currentPrice) => {
  return (item.quantity * (currentPrice - item.price)).toFixed(2);
};

/**
 * Fetch stock info and calculate profit
 *
 * @param items
 * @return {Promise.<*>}
 */
export async function getProfit(items) {
  const symbols = items.map((item) => item.symbol);
  const currentValue = (await fetch(symbols)).reduce((acc, item) => {
    acc[item[KEYS.SYMBOL_KEY]] = item[KEYS.CURRENT_PRICE];
    return acc;
  }, {});

  return items.reduce((acc, item) => {
    acc[item.id] = {
      price: Number(currentValue[item.symbol]).toPrecision(4),
      profit: _getProfit(item, currentValue[item.symbol]),
    };
    return acc;
  }, {});

}

/**
 * Wrapper for getProfit to process a single item
 * @param item
 * @return {Promise.<*>}
 */
export async function getItemProfit(item) {
  return await getProfit([item]);
}
