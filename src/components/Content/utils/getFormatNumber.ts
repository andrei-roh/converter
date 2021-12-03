const getFormatNumber = (number: number, string: string) => {
  if (!number) return string;
  return number.toString().includes('.') ? number.toFixed(2) : number;
};

export default getFormatNumber;
