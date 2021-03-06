const initialState = {
  loading: false,
  error: null,
  currencyRates: 0,
  defaultValue: [431, 451, 456, 1],
  rouble: {
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

export default initialState;
