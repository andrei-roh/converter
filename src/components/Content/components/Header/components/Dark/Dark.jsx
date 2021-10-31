import { WbSunny, Brightness2 } from '@material-ui/icons';
import { DarkIconButton } from './style';

const Dark = ({ showDark, handleShowDark }) => {
  return (
    <DarkIconButton onClick={() => handleShowDark(showDark)}>
      {showDark ? <Brightness2 /> : <WbSunny />}
    </DarkIconButton>
  );
};

export default Dark;
