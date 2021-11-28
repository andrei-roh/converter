import ArrowUpwardRounded from '@material-ui/icons/ArrowDropUp';
import { ButtonField } from './style';
import getCurrencyName from '../../utils/getCurrencyName';
import { useTranslation } from 'react-i18next';
import { IChange } from '../../../../types';

const Change: React.FC<IChange> = ({ label, value, id, exchangeMainField }) => {
  const { t } = useTranslation();
  const handleButtonClick = () => {
    exchangeMainField(label, value, id);
  };
  return (
    <ButtonField
      onClick={handleButtonClick}
      title={`${t('switchTo')} ${t(getCurrencyName(label))}`}
    >
      <ArrowUpwardRounded />
    </ButtonField>
  );
};

export default Change;
