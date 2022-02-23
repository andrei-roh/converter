const getCopyMark = (value: string, handler: (arg0: string) => void) => {
  const delay = 300;
  handler('copied');
  setTimeout(() => {
    handler(value);
  }, delay);
};

export default getCopyMark;
