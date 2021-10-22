import {
  FETCH_START,
  FETCH_ERROR,
  BELARUSIAN_RUBLE_RATE_TO_OTHER_CURRENCIES,
} from './types';
import { URL } from '../../endpoints';

export const fetchStart = () => ({ type: FETCH_START });

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});

export const fetchBelarusianRubleRateEnd = (currency) => ({
  type: BELARUSIAN_RUBLE_RATE_TO_OTHER_CURRENCIES,
  payload: currency,
});

export const fetchBelarusianRubleRate = () => (dispatch) => {
  dispatch(fetchStart());
  return fetch(`${URL}/rates?periodicity=0`, { method: 'GET' })
    .then((response) => response.json())
    .then((content) => dispatch(fetchBelarusianRubleRateEnd(content)))
    .catch((error) => {
      dispatch(fetchError(error));
    });
};
