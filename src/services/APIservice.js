import jsonp from 'jsonp';

const SERVICE_URL = 'http://finance.google.com/finance/info?q=';

/**
 * returns a promise that when resolved returns JSON response
 * @param {Array<String>} symbols
 */
export const fetch = (symbols=[]) => {
  const queryParams = symbols.map((symbol) => `NASDAQ:${symbol}`);
  const URL = `${SERVICE_URL}${queryParams.join(',')}`;

  return new Promise((resolve, reject) => {
    jsonp(URL, null, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data)
      }
    })
  });
};
