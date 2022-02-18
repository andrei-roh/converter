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
  exchangeMainField: (label: string, value: number, id: number) => void;
}

export interface ITableField {
  key: number;
  element: any;
  rate: number;
  exchangeMainField: (label: string, value: number, id: number) => void;
  showScrollButton: boolean;
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
  onfetchLanguageMenuClose: any;
  language: string;
  onfetchChangeLanguage: (language: string) => void;
}

export interface IBankSelector {
  anchorBankMenu: null | HTMLElement;
  onfetchBankMenuOpen: (currentTarget: any) => void;
  onfetchBankMenuClose: any;
  bank: string;
  onfetchChangeBank: (bank: string) => void;
  onfetchChangeEndpoint: (endpoint: string) => void;
}

export interface IDark {
  theme: string;
  showDark: boolean;
  onfetchSwitchTheme: (showDark: boolean, theme: string) => void;
}
