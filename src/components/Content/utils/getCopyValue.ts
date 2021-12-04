const getCopyValue = (element: {
  target: HTMLInputElement | HTMLTextAreaElement;
}) => {
  navigator.clipboard.writeText(element.target.value);
  return element.target.blur();
};

export default getCopyValue;
