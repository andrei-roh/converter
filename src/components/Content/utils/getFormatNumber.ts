const getFormatNumber = (number: number): number => {
  const minDecimalPlaces = 3;
  const minNumberWithDecimalPlaces = 10;
  if (number > minNumberWithDecimalPlaces) return Number(number.toFixed());
  return number.toString().includes('.')
    ? Number(number.toFixed(minDecimalPlaces))
    : number;
};

export default getFormatNumber;
