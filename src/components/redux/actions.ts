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
  CHANGE_ENDPOINT,
  BANK_MENU_OPEN,
  BANK_MENU_CLOSE,
} from './types';
import { createBelarusbankObject } from '../Content/utils/createBelarusbankObject';
import { endpoints } from 'endpoints';

const fetchStart = () => ({ type: FETCH_START });

const fetchError = (error: string) => ({
  type: FETCH_ERROR,
  payload: error,
});

export const fetchBelarusRubleRateEnd = (currency: any) => ({
  type: BELARUS_RUBLE_RATE_TO_OTHER,
  payload: currency,
});

export const fetchBelarusRubleRate = (url: string) => async (dispatch: any) => {
  dispatch(fetchStart());
  try {
    const response = await fetch(url);
    const content = await response.json();
    const result =
      url !== endpoints.nationalBank.url
        ? createBelarusbankObject(content)
        : content;
    return dispatch(fetchBelarusRubleRateEnd(result));
  } catch (error) {
    dispatch(fetchError(String(error)));
  }
};

export const fetchLanguageMenuOpen = (currentTarget: any) => {
  return {
    type: LANGUAGE_MENU_OPEN,
    payload: currentTarget,
  };
};

export const fetchLanguageMenuClose = (
  anchorLanguageMenu: null | HTMLElement
) => ({
  type: LANGUAGE_MENU_CLOSE,
  payload: anchorLanguageMenu,
});

const fetchSetShowDark = (showDark: boolean) => ({
  type: SET_SHOW_DARK,
  payload: !showDark,
});

const fetchSetTheme = (theme: string) => ({
  type: SET_THEME,
  payload: theme,
});

export const fetchSwitchTheme =
  (showDark: boolean, theme: string) => (dispatch: any) => {
    dispatch(fetchSetShowDark(showDark));
    theme === 'light'
      ? dispatch(fetchSetTheme('dark'))
      : dispatch(fetchSetTheme('light'));
  };

export const fetchChangeLanguage = (language: string) => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});

export const fetchChangeBank = (bank: string) => ({
  type: CHANGE_BANK,
  payload: bank,
});

export const fetchChangeEndpoint = (endpoint: string) => ({
  type: CHANGE_ENDPOINT,
  payload: endpoint,
});

export const fetchBankMenuOpen = (currentTarget: any) => {
  return {
    type: BANK_MENU_OPEN,
    payload: currentTarget,
  };
};

export const fetchBankMenuClose = (anchorBankMenu: null | HTMLElement) => ({
  type: BANK_MENU_CLOSE,
  payload: anchorBankMenu,
});
