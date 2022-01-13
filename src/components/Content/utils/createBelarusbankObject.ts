import { emptyObject } from './emptyObject';

export const createBelarusbankObject = (object: any) => {
  return emptyObject
    .map((element) => {
      return {
        ...element,
        Cur_OfficialRate: object[0][`${element.Cur_Abbreviation}_in`] || 0,
      };
    })
    .filter((element) => element.Cur_OfficialRate > 0);
};
