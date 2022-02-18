import { useState } from 'react';
import Change from '../Change/Change';
import { TextFieldBlock, SmallTextField } from './style';
import { Flag } from 'components/themes';
import getFormatNumber from 'components/Content/utils/getFormatNumber';
import ScrollUp from './components/ScrollUp/ScrollUp';
import getCopyValue from 'components/Content/utils/getCopyValue';
import getCopyMark from 'components/Content/utils/getCopyMark';
import getCurrencyName from 'components/Content/utils/getCurrencyName';
import { useTranslation } from 'react-i18next';
import { ITableField } from 'types';
import getCountryFlag from 'components/Content/utils/getCountryFlag';

const TableField: React.FC<ITableField> = ({
  key,
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
    <TextFieldBlock key={key}>
      <SmallTextField
        label={
          rate
            ? t(getCurrencyName(currencyLabel))
            : t(getCurrencyName('currencyForExchange'))
        }
        type="text"
        value={getFormatNumber(rate, t(getCurrencyName(currencyLabel)))}
        margin="normal"
        variant="outlined"
        onClick={handleCurrencyLabelChange}
        InputProps={{
          endAdornment: (
            <>
              <Flag src={getCountryFlag(element.Cur_ID)} alt={t('flag')} />
              <Change
                label={element.Cur_Name}
                value={rate}
                id={element.Cur_ID}
                exchangeMainField={exchangeMainField}
              />
            </>
          ),
        }}
      />
      {showScrollButton ? <ScrollUp /> : null}
    </TextFieldBlock>
  );
};

export default TableField;
