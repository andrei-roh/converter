import ArrowUpwardRounded from '@material-ui/icons/ArrowDropUp';
import { ChangeButton } from './style';
import getCurrencyName from 'components/Content/utils/getCurrencyName';
import { useTranslation } from 'react-i18next';
import { IChange } from 'types';

const Change: React.FC<IChange> = ({ label, value, id, exchangeMainField }) => {
  const { t } = useTranslation();
  const handleButtonClick = () => {
    exchangeMainField(label, value, id);
  };
  return (
    <ChangeButton
      onClick={handleButtonClick}
      title={`${t('switchTo')} ${t(getCurrencyName(label))}`}
    >
      <ArrowUpwardRounded />
    </ChangeButton>
  );
};

export default Change;
