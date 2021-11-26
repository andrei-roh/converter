import { connect } from 'react-redux';
import { WbSunny, Brightness2 } from '@material-ui/icons';
import { DarkIconButton } from './style';
import { fetchSwitchTheme } from '../../../../../redux/actions';
import { useTranslation } from 'react-i18next';

const Dark = ({ theme, showDark, onfetchSwitchTheme }) => {
  const { t } = useTranslation();
  return (
    <DarkIconButton
      onClick={() => onfetchSwitchTheme(showDark, theme)}
      title={t('changeTheme')}
    >
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
