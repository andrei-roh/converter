import { flagpedia } from '../constants/flagpedia';

const getCountryFlag: any = (id: number) => {
  const flag = flagpedia.find((element) => element.Cur_ID === id)?.Cur_Flag;
  if (!flag) return;
  return `https://flagcdn.com/w320/${flag}.png`;
};

export default getCountryFlag;
