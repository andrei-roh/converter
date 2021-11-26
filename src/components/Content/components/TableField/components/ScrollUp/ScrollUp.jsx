import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { IconButton } from '@material-ui/core';
import { ButtonBlock } from './style';
import smoothscroll from 'smoothscroll-polyfill';
import { useTranslation } from 'react-i18next';

const ScrollUp = () => {
  const { t } = useTranslation();
  smoothscroll.polyfill();
  const getScrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <ButtonBlock onClick={getScrollUp} title={t('scrollUp')}>
      <IconButton color="secondary">
        <KeyboardArrowUp fontSize="large" />
      </IconButton>
    </ButtonBlock>
  );
};

export default ScrollUp;
