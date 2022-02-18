const getFormatNumber = (number: number, string: string) => {
  if (!number) return string;
  if (number.toString().length > 10)
    return number.toFixed(0).length === 1
      ? number.toFixed(3)
      : number.toFixed(0);
  return number.toString().includes('.') ? number.toFixed(3) : number;
};

export default getFormatNumber;
