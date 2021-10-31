import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { ButtonBlock, ButtonField } from './style';
import smoothscroll from 'smoothscroll-polyfill';

const ScrollOnTop = () => {
  smoothscroll.polyfill();
  const getScrollOnTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <ButtonBlock onClick={getScrollOnTop}>
      <ButtonField>
        <KeyboardArrowUp />
      </ButtonField>
    </ButtonBlock>
  );
};

export default ScrollOnTop;
