const getCopyValue = (element) => {
  navigator.clipboard.writeText(element.target.value);
  return element.target.blur();
};

export default getCopyValue;
