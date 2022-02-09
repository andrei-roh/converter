import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { Button } from 'components/themes';
import getCurrencyName from 'components/Content/utils/getCurrencyName';
import { useTranslation } from 'react-i18next';
import { IChange } from 'types';

const Change: React.FC<IChange> = ({ label, value, id, exchangeMainField }) => {
  const { t } = useTranslation();
  const handleButtonClick = () => {
    exchangeMainField(label, value, id);
  };
  return (
    <Button
      onClick={handleButtonClick}
      title={`${t('switchTo')} ${t(getCurrencyName(label))}`}
    >
      <KeyboardArrowUp />
    </Button>
  );
};

export default Change;
