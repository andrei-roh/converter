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
  belarusRuble: Currency;
  belarusRubleToOther: number;
}

export interface State extends IError, IContent {
  loading: boolean;
  theme: string;
  showDark: boolean;
  anchorMenu: null | HTMLElement;
  language: string;
  endpoint: string;
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
  element: any;
  rate: number;
  exchangeMainField: (label: string, value: number, id: number) => void;
  showScrollButton: boolean;
}

export interface IHeader {
  mainLabelValue: string;
  mainFieldValue: number;
  handleMainFieldChange: any;
}

export interface IMain extends State {
  onfetchBelarusRubleRate: (url: string) => void;
}

export interface ILanguageSelector {
  anchorMenu: null | HTMLElement;
  onfetchMenuOpen: (currentTarget: any) => void;
  onfetchMenuClose: any;
  language: string;
  onfetchChangeLanguage: (language: string) => void;
}

export interface IDark {
  theme: string;
  showDark: boolean;
  onfetchSwitchTheme: (showDark: boolean, theme: string) => void;
}
