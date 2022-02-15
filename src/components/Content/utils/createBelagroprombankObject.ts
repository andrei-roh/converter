import { emptyObject } from './emptyObject';

export const createBelagroprombankObject = (object: any) => {
  const intermediate: any = JSON.parse(object)
    .elements[0].elements.map((element: any) => ({
      CharCode: element.elements[1].elements[0].text,
      RateBuy: element.elements[4].elements[0].text,
    }))
    .slice(0, 9);
  return emptyObject
    .map((element) => {
      return {
        ...element,
        Cur_Scale: 1,
        Cur_OfficialRate:
          intermediate.filter(
            (value: any) => value.CharCode === element.Cur_Abbreviation
          )[0]?.RateBuy || 0,
      };
    })
    .filter((element) => element.Cur_OfficialRate > 0);
};
