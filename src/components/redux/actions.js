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
    .catch(() => {
      dispatch(fetchError('Ошибка получения курсов'));
    });
};

export const fetchMenuOpen = (currentTarget) => {
  return {
    type: MENU_OPEN,
    payload: currentTarget,
  };
};

export const fetchMenuClose = (anchorMenu) => ({
  type: MENU_CLOSE,
  payload: anchorMenu,
});

export const fetchSetShowDark = (showDark) => ({
  type: SET_SHOW_DARK,
  payload: !showDark,
});

export const fetchSetTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const fetchSwitchTheme = (showDark, theme) => (dispatch) => {
  dispatch(fetchSetShowDark(showDark));
  theme === 'light'
    ? dispatch(fetchSetTheme('dark'))
    : dispatch(fetchSetTheme('light'));
};

export const fetchChangeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});
