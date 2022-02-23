import { defaultRouble } from '../constants/defaultRouble';

export const createNationalBankObject = (object: any) => {
  const specialDrawingRightsId = 457;
  return object
    .filter((element: any) => element.Cur_ID !== specialDrawingRightsId)
    .map((value: any) => ({
      ...value,
      Cur_OfficialRate: value.Cur_OfficialRate,
    }))
    .concat(defaultRouble);
};
