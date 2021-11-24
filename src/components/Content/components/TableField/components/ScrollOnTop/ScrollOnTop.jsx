import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { IconButton } from '@material-ui/core';
import { ButtonBlock } from './style';
import smoothscroll from 'smoothscroll-polyfill';

const ScrollOnTop = () => {
  smoothscroll.polyfill();
  const getScrollOnTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <ButtonBlock onClick={getScrollOnTop}>
      <IconButton color="secondary">
        <KeyboardArrowUp fontSize="large" />
      </IconButton>
    </ButtonBlock>
  );
};

export default ScrollOnTop;
