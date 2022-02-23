import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { ScrollUpBlock } from './style';
import smoothscroll from 'smoothscroll-polyfill';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/themes';

const ScrollUp = () => {
  const { t } = useTranslation();
  smoothscroll.polyfill();
  const getScrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <ScrollUpBlock onClick={getScrollUp} title={t('scrollUp')}>
      <Button>
        <KeyboardArrowUp fontSize="large" />
      </Button>
    </ScrollUpBlock>
  );
};

export default ScrollUp;
