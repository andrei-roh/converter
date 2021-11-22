const getCopyMark = (value, handler) => {
  handler('copied');
  setTimeout(() => {
    handler(value);
  }, 300);
};

export default getCopyMark;
