import { emptyObject } from './emptyObject';

export const createBankDabrabytObject = (object: any) => {
  const obj: any =
    JSON.parse(object).elements[0].elements[1].elements[0].elements[3].elements;
  return emptyObject
    .map((element) => {
      return {
        ...element,
        Cur_Scale: 1,
        Cur_OfficialRate:
          obj.filter(
            (value: any) => value.attributes.iso === element.Cur_Abbreviation
          )[0]?.attributes.buy || 0,
      };
    })
    .filter((element) => element.Cur_OfficialRate > 0);
};
