import { flagpedia } from '../constants/flagpedia';

const getCountryFlag: any = (element: number | any) => {
  const flag = flagpedia.find((value) => value.Cur_ID === element)?.Cur_Flag;
  if (!flag) return;
  return `https://flagcdn.com/w40/${flag}.png`;
};

export default getCountryFlag;
