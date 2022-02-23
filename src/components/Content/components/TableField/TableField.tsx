import { useState } from 'react';
import Change from '../Change/Change';
import { TextFieldBlock, SmallTextField } from './style';
import { Flag } from 'components/themes';
import ScrollUp from './components/ScrollUp/ScrollUp';
import getCopyValue from 'components/Content/utils/getCopyValue';
import getCopyMark from 'components/Content/utils/getCopyMark';
import getCurrencyName from 'components/Content/utils/getCurrencyName';
import { useTranslation } from 'react-i18next';
import { ITableField, SyntheticEvent } from 'types';
import getCountryFlag from 'components/Content/utils/getCountryFlag';

const TableField: React.FC<ITableField> = ({
  element,
  rate,
  exchangeMainField,
  showScrollButton,
  currentMainId,
}) => {
  const { t } = useTranslation();
  const [currencyLabel, getCurrencyLabel] = useState(element.Cur_Name);
  const handleCurrencyLabelChange = (element: SyntheticEvent) => {
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
        value={rate || t(getCurrencyName(currencyLabel))}
        margin="normal"
        variant="outlined"
        onClick={handleCurrencyLabelChange}
        InputProps={{
          inputMode: 'numeric',
          startAdornment: (
            <Flag src={getCountryFlag(element.Cur_ID)} alt={t('flag')} />
          ),
          endAdornment: (
            <Change
              label={element.Cur_Name}
              value={rate}
              id={element.Cur_ID}
              exchangeMainField={exchangeMainField}
              currentMainId={currentMainId}
            />
          ),
        }}
      />
      {showScrollButton ? <ScrollUp /> : null}
    </TextFieldBlock>
  );
};

export default TableField;
