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
import { URL } from '../../endpoints';

export const fetchStart = () => ({ type: FETCH_START });

export const fetchError = (error: string) => ({
  type: FETCH_ERROR,
  payload: error,
});

export const fetchBelarusRubleRateEnd = (currency: any) => ({
  type: BELARUS_RUBLE_RATE_TO_OTHER,
  payload: currency,
});

export const fetchBelarusRubleRate = () => (dispatch: any) => {
  dispatch(fetchStart());
  return fetch(`${URL}/rates?periodicity=0`, { method: 'GET' })
    .then((response) => response.json())
    .then((content) => dispatch(fetchBelarusRubleRateEnd(content)))
    .catch(() => {
      dispatch(fetchError('Ошибка получения курсов'));
    });
};

export const fetchMenuOpen = (currentTarget: any) => {
  return {
    type: MENU_OPEN,
    payload: currentTarget,
  };
};

export const fetchMenuClose = (anchorMenu: number) => ({
  type: MENU_CLOSE,
  payload: anchorMenu,
});

export const fetchSetShowDark = (showDark: boolean) => ({
  type: SET_SHOW_DARK,
  payload: !showDark,
});

export const fetchSetTheme = (theme: string) => ({
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
