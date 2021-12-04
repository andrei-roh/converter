const getCopyMark = (
  value: number,
  handler: (arg0: string | number) => void
) => {
  handler('copied');
  setTimeout(() => {
    handler(value);
  }, 300);
};

export default getCopyMark;
