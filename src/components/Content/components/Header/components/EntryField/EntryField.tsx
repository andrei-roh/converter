import { MainBlock, MainTextField } from './style';
import getSelectValue from 'components/Content/utils/getSelectValue';
import getCurrencyName from 'components/Content/utils/getCurrencyName';
import { useTranslation } from 'react-i18next';
import { IHeader } from 'types';

const EntryField: React.FC<IHeader> = ({
  mainLabelValue,
  mainFieldValue,
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
      />
    </MainBlock>
  );
};

export default EntryField;
