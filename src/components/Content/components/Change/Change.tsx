import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { Changed } from './style';
import getCurrencyName from 'components/Content/utils/getCurrencyName';
import { useTranslation } from 'react-i18next';
import { IChange } from 'types';

const Change: React.FC<IChange> = ({
  label,
  value,
  id,
  exchangeMainField,
  currentMainId,
}) => {
  const { t } = useTranslation();
  const handleButtonClick = () => {
    exchangeMainField(label, value, id, currentMainId);
  };
  return (
    <Changed
      onClick={handleButtonClick}
      title={`${t('switchTo')} ${t(getCurrencyName(label))}`}
    >
      <KeyboardArrowUp />
    </Changed>
  );
};

export default Change;
