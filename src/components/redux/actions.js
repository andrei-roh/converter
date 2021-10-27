import { FETCH_START, FETCH_ERROR, BELARUS_RUBLE_RATE_TO_OTHER } from './types';
import { URL } from '../../endpoints';

export const fetchStart = () => ({ type: FETCH_START });

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});

export const fetchBelarusRubleRateEnd = (currency) => ({
  type: BELARUS_RUBLE_RATE_TO_OTHER,
  payload: currency,
});

export const fetchBelarusRubleRate = () => (dispatch) => {
  dispatch(fetchStart());
  return fetch(`${URL}/rates?periodicity=0`, { method: 'GET' })
    .then((response) => response.json())
    .then((content) => dispatch(fetchBelarusRubleRateEnd(content)))
    .catch((error) => {
      dispatch(fetchError(error));
    });
};
