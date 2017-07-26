import axios from 'axios';
import json from 'comment-json';

const SERVICE_URL = 'http://finance.google.com/finance/info?q=';

/**
 * returns a promise that when resolved returns JSON response
 * @param {Array<String>} symbols
 */
export const fetch = (symbols=[]) => {
  const queryParams = symbols.map((symbol) => `NASDAQ:${symbol}`);
  const URL = `${SERVICE_URL}${queryParams.join(',')}`;
  return axios.get(URL).then((response) => json.parse(response.date));
};
