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
  belarusianRubleRate: any;
  theme: string;
  showDark: boolean;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface IChange {
  label: string;
  value: number;
  id: number;
  exchangeMainField: any;
}

export interface ITableField {
  element: any;
  rate: number;
  exchangeMainField: any;
  showScrollButton: boolean;
}

export interface IHeader {
  mainLabelValue: string;
  mainFieldValue: number;
  handleMainFieldChange: any;
}

export interface IMain extends State {
  onfetchBelarusRubleRate: any;
}
