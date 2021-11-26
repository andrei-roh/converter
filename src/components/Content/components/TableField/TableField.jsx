import { useState } from 'react';
import Change from '../Change/Change';
import { TextFieldBlock, SmallTextField } from './style';
import getFormatNumber from '../../utils/getFormatNumber';
import ScrollUp from './components/ScrollUp/ScrollUp';
import getCopyValue from '../../utils/getCopyValue';
import getCopyMark from '../../utils/getCopyMark';
import getCurrencyName from '../../utils/getCurrencyName';
import { useTranslation } from 'react-i18next';

const TableField = ({ element, rate, exchangeMainField, showScrollButton }) => {
  const { t } = useTranslation();
  const [currencyLabel, getCurrencyLabel] = useState(element.Cur_Name);
  const handleCurrencyLabelChange = (element) => {
    getCopyValue(element);
    getCopyMark(currencyLabel, getCurrencyLabel);
  };

  return (
    <TextFieldBlock key={element.Cur_ID}>
      <SmallTextField
        label={t(getCurrencyName(currencyLabel))}
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
      {showScrollButton ? <ScrollUp /> : null}
    </TextFieldBlock>
  );
};

export default TableField;
