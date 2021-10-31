import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { ButtonBlock, ButtonField } from './style';

const ScrollOnTop = () => {
  const getScrollOnTop = () => {
    window.scrollTo(0, 0);
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
