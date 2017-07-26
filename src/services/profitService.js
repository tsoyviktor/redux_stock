import {fetchOne, fetch} from '../services/APIservice';
import {values, keys} from 'lodash/object';

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
const _getProfit = (item, currentPrice) => item.quantity * (currentPrice - item.price);

/**
 *
 * @param portfolio
 */
export async function getProfit(portfolio) {
  const symbols = values(portfolio).map((item) => item.symbol);

  const currentValue = (await fetch(symbols)).reduce((acc, item) => {
    acc[item[KEYS.SYMBOL_KEY]] = item[KEYS.CURRENT_PRICE];
    return acc;
  }, {});

  return values(portfolio).reduce((acc, item) => {
    acc[item.id] = {
      price: currentValue[item.symbol],
      profit: _getProfit(item, currentValue[item.symbol]),
    };
    return acc;
  }, {});

}
