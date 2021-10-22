import {
  FETCH_START,
  FETCH_ERROR,
  BELARUSIAN_RUBLE_RATE_TO_OTHER_CURRENCIES,
} from './types';

const initialState = {
  loading: false,
  error: null,
  belarusianRubleRate: 1,
  belarusianRubleRateToOtherCurrencies: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case BELARUSIAN_RUBLE_RATE_TO_OTHER_CURRENCIES:
      return {
        ...state,
        belarusianRubleRateToOtherCurrencies: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
