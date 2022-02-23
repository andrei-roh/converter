import {
  FETCH_START,
  FETCH_ERROR,
  CURRENCY_RATES,
  LANGUAGE_MENU_OPEN,
  LANGUAGE_MENU_CLOSE,
  SET_SHOW_DARK,
  SET_THEME,
  CHANGE_LANGUAGE,
  CHANGE_BANK,
  CHANGE_ENDPOINT,
  BANK_MENU_OPEN,
  BANK_MENU_CLOSE,
} from './types';
import { Action } from 'types';
import { endpoints } from 'endpoints';
import { defaultRouble } from './constants/defaultRouble';

const { belarusBank } = endpoints;

const initialState = {
  loading: false,
  error: null,
  currencyRates: 0,
  defaultValue: [431, 451, 456, 1],
  rouble: defaultRouble,
  anchorLanguageMenu: null,
  showDark: false,
  theme: 'light',
  language: 'be',
  bank: belarusBank.name,
  endpoint: belarusBank.url,
  anchorBankMenu: null,
};

const rootReducer = (state = initialState, action: Action) => {
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
    case CURRENCY_RATES:
      return {
        ...state,
        currencyRates: action.payload,
        rouble: defaultRouble,
        loading: false,
      };
    case LANGUAGE_MENU_OPEN:
      return {
        ...state,
        anchorLanguageMenu: action.payload,
      };
    case LANGUAGE_MENU_CLOSE:
      return {
        ...state,
        anchorLanguageMenu: null,
      };
    case SET_SHOW_DARK:
      return {
        ...state,
        showDark: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case CHANGE_BANK:
      return {
        ...state,
        bank: action.payload,
      };
    case CHANGE_ENDPOINT:
      return {
        ...state,
        endpoint: action.payload,
      };
    case BANK_MENU_OPEN:
      return {
        ...state,
        anchorBankMenu: action.payload,
      };
    case BANK_MENU_CLOSE:
      return {
        ...state,
        anchorBankMenu: null,
      };
    default:
      return state;
  }
};

export default rootReducer;
