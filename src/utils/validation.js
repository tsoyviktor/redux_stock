import {fetch} from '../services/APIservice';
import moment from 'moment';
import {isNumber, isEmpty} from 'lodash'

/**
 * Using the fetch from the service to validate whether symbol is valid
 * @param symbol
 * @return {Promise}
 */
export const validateSymbol = (symbol) => {
  return new Promise((resolve, reject) => {
    if (isEmpty(symbol)) { reject(); }
    fetch([symbol])
      .then((response) => resolve())
      .catch((err) => reject());
  });
};

/**
 * Tests that the date is valid (non empty, past date)
 * @param date
 * @return {Promise}
 */
export const validateDate = (date) => {
  return new Promise((resolve, reject) => {
    if (isEmpty(date) || moment(date) > moment(new Date())) {
      reject();
    } else {
      resolve();
    }
  });
};

/**
 * Test taht Quantity is valid number
 * @param quantity
 * @return {Promise}
 */
export const validateQuantity = (quantity) => {
  return new Promise((resolve, reject) => {
    if (Number.isInteger(quantity)) {
      resolve();
    } else {
      reject();
    }
  });
};

/**
 * Test that price is valid
 * @param price
 * @return {Promise}
 */
export const validatePrice = (price) => {
  return new Promise((resolve, reject) => {
    if (isNumber(price)) {
      resolve();
    } else {
      reject();
    }
  });
};
