import {
  FETCH_START,
  FETCH_ERROR,
  BELARUS_RUBLE_RATE_TO_OTHER,
  MENU_OPEN,
  MENU_CLOSE,
  SET_SHOW_DARK,
  SET_THEME,
  CHANGE_LANGUAGE,
} from './types';
import { Action } from '../../types';

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
  anchorMenu: null,
  showDark: false,
  theme: 'light',
  language: 'en',
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
    case MENU_OPEN:
      return {
        ...state,
        anchorMenu: action.payload,
      };
    case MENU_CLOSE:
      return {
        ...state,
        anchorMenu: null,
      };
    case SET_SHOW_DARK:
      return {
        ...state,
        showDark: !state.showDark,
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
    default:
      return state;
  }
};

export default rootReducer;