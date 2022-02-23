import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { ScrollUpBlock, ScrollUpButton } from './style';
import smoothscroll from 'smoothscroll-polyfill';
import { useTranslation } from 'react-i18next';

const ScrollUp = () => {
  const { t } = useTranslation();
  smoothscroll.polyfill();
  const getScrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <ScrollUpBlock onClick={getScrollUp} title={t('scrollUp')}>
      <ScrollUpButton>
        <KeyboardArrowUp fontSize="large" />
      </ScrollUpButton>
    </ScrollUpBlock>
  );
};

export default ScrollUp;
