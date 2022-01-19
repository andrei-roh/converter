import { Currency } from 'types';

const createOtherRate = (
  currencyId: number,
  setCurrencyId: (arg0: number) => void,
  currencyList: any
) => {
  setCurrencyId(currencyId);
  const coefficientCur_OfficialRate = currencyList.find(
    (element: Currency) => element.Cur_ID === currencyId
  ).Cur_OfficialRate;
  const coefficientCur_Scale = currencyList.find(
    (element: Currency) => element.Cur_ID === currencyId
  ).Cur_Scale;
  currencyList.map((element: Currency) => {
    if (element.Cur_ID === currencyId) {
      element.Cur_Scale = 1;
      return (element.Cur_OfficialRate = 1);
    }
    return (element.Cur_OfficialRate =
      (coefficientCur_Scale * element.Cur_OfficialRate) /
      coefficientCur_OfficialRate);
  });
};

export default createOtherRate;
