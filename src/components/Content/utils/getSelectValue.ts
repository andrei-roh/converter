const getSelectValue = (element: {
  target: HTMLInputElement | HTMLTextAreaElement;
}) => {
  return element.target.select();
};

export default getSelectValue;
