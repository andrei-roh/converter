import {
  FETCH_START,
  FETCH_ERROR,
  BELARUS_RUBLE_RATE_TO_OTHER,
  LANGUAGE_MENU_OPEN,
  LANGUAGE_MENU_CLOSE,
  SET_SHOW_DARK,
  SET_THEME,
  CHANGE_LANGUAGE,
  CHANGE_BANK,
  BANK_MENU_OPEN,
  BANK_MENU_CLOSE,
} from './types';
import { Action } from '../../types';
import { endpoints } from '../../endpoints';

const { nationalBank } = endpoints;

const initialState = {
  loading: false,
  error: null,
  belarusRubleToOther: 0,
  defaultValue: [431, 451, 456, 1],
  belarusRuble: {
    Cur_Abbreviation: 'BEL',
    Cur_ID: 1,
    Cur_Name: 'Белорусский рубль',
    Cur_OfficialRate: 1,
    Cur_Scale: 1,
  },
  anchorLanguageMenu: null,
  showDark: false,
  theme: 'light',
  language: 'en',
  bank: nationalBank.name,
  endpoint: nationalBank.url,
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
    case BELARUS_RUBLE_RATE_TO_OTHER:
      return {
        ...state,
        belarusRubleToOther: action.payload,
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
