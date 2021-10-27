import { FETCH_START, FETCH_ERROR, BELARUS_RUBLE_RATE_TO_OTHER } from './types';

const initialState = {
  loading: false,
  error: null,
  belarusRubleToOther: 0,
  defaultValue: [431, 451, 456, 449, 1],
  belarusRuble: {
    Cur_Abbreviation: 'BEL',
    Cur_ID: 1,
    Cur_Name: 'Белорусский рубль',
    Cur_OfficialRate: 1,
    Cur_Scale: 1,
  },
};

const rootReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default rootReducer;
