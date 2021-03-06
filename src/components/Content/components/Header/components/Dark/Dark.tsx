import { connect } from 'react-redux';
import { WbSunny, Brightness2 } from '@material-ui/icons';
import { Button } from 'components/themes';
import { fetchSwitchTheme } from 'components/redux/actions';
import { useTranslation } from 'react-i18next';
import { IDark, State } from 'types';

const Dark: React.FC<IDark> = ({ theme, showDark, onfetchSwitchTheme }) => {
  const { t } = useTranslation();
  return (
    <Button
      onClick={() => onfetchSwitchTheme(showDark, theme)}
      title={t('changeTheme')}
    >
      {showDark ? <Brightness2 /> : <WbSunny />}
    </Button>
  );
};

const mapStateToProps = (state: State) => ({
  showDark: state.showDark,
  theme: state.theme,
});

const mapDispatchToProps = (dispatch: any) => ({
  onfetchSwitchTheme: (showDark: boolean, theme: string) =>
    dispatch(fetchSwitchTheme(showDark, theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dark);
