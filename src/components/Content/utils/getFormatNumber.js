const getFormatNumber = (number) => {
  if (!Number.isInteger(+number)) return number.toFixed(3);
  return number;
};

export default getFormatNumber;
