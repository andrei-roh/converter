import { MainBlock, MainTextField } from './style';
import { Flag } from 'components/themes';
import getCurrencyName from 'components/Content/utils/getCurrencyName';
import getCountryFlag from 'components/Content/utils/getCountryFlag';
import getSelectValue from 'components/Content/utils/getSelectValue';
import { useTranslation } from 'react-i18next';
import { IHeader } from 'types';

const EntryField: React.FC<IHeader> = ({
  mainLabelValue,
  mainFieldValue,
  currentMainId,
  handleMainFieldChange,
}) => {
  const { t } = useTranslation();
  return (
    <MainBlock>
      <MainTextField
        label={t(getCurrencyName(mainLabelValue))}
        value={mainFieldValue ? mainFieldValue : ''}
        color="primary"
        variant="outlined"
        autoFocus={false}
        onFocus={getSelectValue}
        onChange={handleMainFieldChange}
        fullWidth
        type="number"
        InputProps={{
          endAdornment: (
            <Flag src={getCountryFlag(currentMainId)} alt={t('flag')} />
          ),
        }}
      />
    </MainBlock>
  );
};

export default EntryField;
