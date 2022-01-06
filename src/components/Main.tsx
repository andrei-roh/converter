import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBelarusRubleRate } from './redux/actions';
import Spinner from './Spinner/Spinner';
import Error from './Error/Error';
import Content from './Content/Content';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from './themes';
import { IMain, State } from '../types';

const Main: React.FC<IMain> = ({
  loading,
  error,
  defaultValue,
  belarusRuble,
  belarusRubleToOther,
  onfetchBelarusRubleRate,
  theme,
  endpoint,
}) => {
  useEffect(() => {
    onfetchBelarusRubleRate(endpoint);
  }, [endpoint, onfetchBelarusRubleRate]);

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

const mapStateToProps = (state: State) => ({
  loading: state.loading,
  error: state.error,
  defaultValue: state.defaultValue,
  belarusRuble: state.belarusRuble,
  belarusRubleToOther: state.belarusRubleToOther,
  theme: state.theme,
  showDark: state.showDark,
  endpoint: state.endpoint,
});

const mapDispatchToProps = (dispatch: any) => ({
  onfetchBelarusRubleRate: (url: string) =>
    dispatch(fetchBelarusRubleRate(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
