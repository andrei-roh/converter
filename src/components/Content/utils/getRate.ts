import { Currency } from '../../../types';

const getRate = (
  showElement: boolean,
  elementToOtherData: number,
  otherData: Array<Currency>
) => {
  if (!showElement) return elementToOtherData;
  return otherData;
};

export default getRate;
