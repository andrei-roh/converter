import { defaultCurrencies } from '../constants/defaultCurrencies';

export const createBelarusbankObject = (object: any) => {
  return defaultCurrencies
    .map((element) => {
      return {
        ...element,
        Cur_OfficialRate: object[0][`${element.Cur_Abbreviation}_in`] || 0,
      };
    })
    .filter((element) => element.Cur_OfficialRate > 0);
};
