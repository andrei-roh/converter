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
import { createNationalBankObject } from 'components/redux/utils/createNationalBankObject';
import { createBelarusbankObject } from 'components/redux/utils/createBelarusbankObject';
import { createBankDabrabytObject } from 'components/redux/utils/createBankDabrabytObject';
import { createBelagroprombankObject } from 'components/redux/utils/createBelagroprombankObject';
import { endpoints } from 'endpoints';
import convert from 'xml-js';

const fetchStart = () => ({ type: FETCH_START });

const fetchError = (error: string) => ({
  type: FETCH_ERROR,
  payload: error,
});

export const fetchBelarusRubleRateEnd = (currency: any) => ({
  type: CURRENCY_RATES,
  payload: currency,
});

export const fetchBelarusRubleRate = (url: string) => async (dispatch: any) => {
  dispatch(fetchStart());
  const { nationalBank, belarusBank, dabrabytBank, belagropromBank } =
    endpoints;
  try {
    const response = await fetch(
      `https://evening-taiga-06138.herokuapp.com/${url}`
    );
    let result: any;
    const options = {
      compact: false,
      spaces: 0,
      ignoreDeclaration: true,
    };
    switch (url) {
      case nationalBank.url:
        result = createNationalBankObject(await response.json());
        dispatch(fetchBelarusRubleRateEnd(result));
        break;
      case belarusBank.url:
        result = createBelarusbankObject(await response.json());
        dispatch(fetchBelarusRubleRateEnd(result));
        break;
      case dabrabytBank.url:
        result = createBankDabrabytObject(
          await response.text().then((xml) => {
            return convert.xml2json(xml, options);
          })
        );
        dispatch(fetchBelarusRubleRateEnd(result));
        break;
      case belagropromBank.url:
        result = createBelagroprombankObject(
          await response.text().then((xml) => {
            return convert.xml2json(xml, options);
          })
        );
        dispatch(fetchBelarusRubleRateEnd(result));
        break;
    }
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
