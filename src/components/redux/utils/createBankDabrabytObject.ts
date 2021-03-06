import { defaultCurrencies } from '../constants/defaultCurrencies';
import { defaultRouble } from '../constants/defaultRouble';

export const createBankDabrabytObject = (object: any) => {
  const intermediate: any =
    JSON.parse(object).elements[0].elements[1].elements[0].elements[3].elements;
  return defaultCurrencies
    .map((element) => {
      return {
        ...element,
        Cur_Scale: 1,
        Cur_OfficialRate:
          intermediate.filter(
            (value: any) => value.attributes.iso === element.Cur_Abbreviation
          )[0]?.attributes.buy || 0,
      };
    })
    .filter((element) => element.Cur_OfficialRate > 0)
    .concat(defaultRouble);
};
