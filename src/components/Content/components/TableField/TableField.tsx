import { useState } from 'react';
import Change from '../Change/Change';
import { TextFieldBlock, SmallTextField } from './style';
import getFormatNumber from 'components/Content/utils/getFormatNumber';
import ScrollUp from './components/ScrollUp/ScrollUp';
import getCopyValue from 'components/Content/utils/getCopyValue';
import getCopyMark from 'components/Content/utils/getCopyMark';
import getCurrencyName from 'components/Content/utils/getCurrencyName';
import { useTranslation } from 'react-i18next';
import { ITableField } from 'types';

const TableField: React.FC<ITableField> = ({
  element,
  rate,
  exchangeMainField,
  showScrollButton,
}) => {
  const { t } = useTranslation();
  const [currencyLabel, getCurrencyLabel] = useState(element.Cur_Name);
  const handleCurrencyLabelChange = (element: any) => {
    getCopyValue(element);
    getCopyMark(currencyLabel, getCurrencyLabel);
  };

  return (
    <TextFieldBlock key={element.Cur_ID}>
      <SmallTextField
        label={
          rate
            ? t(getCurrencyName(currencyLabel))
            : t(getCurrencyName('currencyForExchange'))
        }
        type="text"
        value={getFormatNumber(rate, t(getCurrencyName(currencyLabel)))}
        margin="normal"
        variant="filled"
        onClick={handleCurrencyLabelChange}
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
