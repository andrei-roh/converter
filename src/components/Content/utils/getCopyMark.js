const getCopyMark = (value, handler) => {
  handler('Скопировано');
  setTimeout(() => {
    handler(value);
  }, 300);
};

export default getCopyMark;
