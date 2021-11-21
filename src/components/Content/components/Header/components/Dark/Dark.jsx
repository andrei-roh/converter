import { connect } from 'react-redux';
import { WbSunny, Brightness2 } from '@material-ui/icons';
import { DarkIconButton } from './style';
import { fetchSwitchTheme } from '../../../../../redux/actions';

const Dark = ({ theme, showDark, onfetchSwitchTheme }) => {
  return (
    <DarkIconButton onClick={() => onfetchSwitchTheme(showDark, theme)}>
      {showDark ? <Brightness2 /> : <WbSunny />}
    </DarkIconButton>
  );
};

const mapStateToProps = (state) => ({
  showDark: state.showDark,
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  onfetchSwitchTheme: (showDark, theme) =>
    dispatch(fetchSwitchTheme(showDark, theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dark);
