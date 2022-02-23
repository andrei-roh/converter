export interface Currency {
  Cur_Abbreviation: string;
  Cur_ID: number;
  Cur_Name: string;
  Cur_OfficialRate: number;
  Cur_Scale: number;
}

export interface IError {
  error: string;
}

export interface IContent {
  defaultValue: Array<number>;
  rouble: Currency;
  currencyRates: number;
}

export interface State extends IError, IContent {
  loading: boolean;
  theme: string;
  showDark: boolean;
  anchorLanguageMenu: null | HTMLElement;
  language: string;
  bank: string;
  endpoint: string;
  anchorBankMenu: null | HTMLElement;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface IChange {
  label: string;
  value: number;
  id: number;
  exchangeMainField: (
    label: string,
    value: number,
    id: number,
    currentMainId: number
  ) => void;
  currentMainId: number;
}

export interface ITableField {
  key: number;
  element: Currency;
  rate: number;
  exchangeMainField: (
    label: string,
    value: number,
    id: number,
    currentMainId: number
  ) => void;
  showScrollButton: boolean;
  currentMainId: number;
}

export interface IHeader {
  mainLabelValue: string;
  mainFieldValue: number;
  currentMainId: number;
  handleMainFieldChange: any;
}

export interface IMain extends State {
  onfetchCurrencyRate: (url: string) => void;
}

export interface ILanguageSelector {
  anchorLanguageMenu: null | HTMLElement;
  onfetchLanguageMenuOpen: (currentTarget: any) => void;
  onfetchLanguageMenuClose: (currentTarget: any) => void;
  language: string;
  onfetchChangeLanguage: (language: string) => void;
}

export interface IBankSelector {
  anchorBankMenu: null | HTMLElement;
  onfetchBankMenuOpen: (currentTarget: any) => void;
  onfetchBankMenuClose: (currentTarget: any) => void;
  bank: string;
  onfetchChangeBank: (bank: string) => void;
  onfetchChangeEndpoint: (endpoint: string) => void;
}

export interface IDark {
  theme: string;
  showDark: boolean;
  onfetchSwitchTheme: (showDark: boolean, theme: string) => void;
}

export interface SyntheticEvent {
  target: any;
  currentTarget: EventTarget;
}

export interface Endpoint {
  name: string;
  url: string;
}
