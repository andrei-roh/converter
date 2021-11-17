import React, { useState } from 'react';
import Change from '../Change/Change';
import { TextFieldBlock, SmallTextField } from './style';
import getFormatNumber from '../../utils/getFormatNumber';
import ScrollOnTop from './components/ScrollOnTop/ScrollOnTop';
import getCopyValue from '../../utils/getCopyValue';
import getCopyMark from '../../utils/getCopyMark';

const TableField = ({ element, rate, exchangeMainField, showScrollButton }) => {
  const [currencyLabel, getCurrencyLabel] = useState(element.Cur_Name);
  const handleCurrencyLabelChange = (element) => {
    getCopyValue(element);
    getCopyMark(currencyLabel, getCurrencyLabel);
  };

  return (
    <TextFieldBlock key={element.Cur_ID}>
      <SmallTextField
        label={
          currencyLabel.length < 36 ? currencyLabel : currencyLabel.substr(0, 3)
        }
        type="text"
        value={getFormatNumber(rate)}
        margin="normal"
        variant="filled"
        onClick={handleCurrencyLabelChange}
        readOnly
      />
      <Change
        label={element.Cur_Name}
        value={rate}
        id={element.Cur_ID}
        exchangeMainField={exchangeMainField}
      />
      {showScrollButton ? <ScrollOnTop /> : null}
    </TextFieldBlock>
  );
};

export default TableField;
