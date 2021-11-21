import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBelarusRubleRate, fetchSwitchTheme } from './redux/actions';
import Spinner from './Spinner/Spinner';
import Error from './Error/Error';
import Content from './Content/Content';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from './themes';

const Main = ({
  loading,
  error,
  defaultValue,
  belarusRuble,
  belarusRubleToOther,
  onfetchBelarusRubleRate,
  theme,
}) => {
  useEffect(() => {
    onfetchBelarusRubleRate();
  }, [onfetchBelarusRubleRate]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <Content
          defaultValue={defaultValue}
          belarusRuble={belarusRuble}
          belarusRubleToOther={belarusRubleToOther}
        />
      )}
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  defaultValue: state.defaultValue,
  belarusRuble: state.belarusRuble,
  belarusianRubleRate: state.belarusianRubleRate,
  belarusRubleToOther: state.belarusRubleToOther,
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  onfetchBelarusRubleRate: () => dispatch(fetchBelarusRubleRate()),
  onfetchSwitchTheme: (theme) => dispatch(fetchSwitchTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
