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
  rouble,
  currencyRates,
  onfetchCurrencyRate,
  theme,
  endpoint,
}) => {
  useEffect(() => {
    onfetchCurrencyRate(endpoint);
  }, [endpoint, onfetchCurrencyRate]);

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
          rouble={rouble}
          currencyRates={currencyRates}
        />
      )}
    </ThemeProvider>
  );
};

const mapStateToProps = (state: State) => ({
  loading: state.loading,
  error: state.error,
  defaultValue: state.defaultValue,
  rouble: state.rouble,
  currencyRates: state.currencyRates,
  theme: state.theme,
  showDark: state.showDark,
  endpoint: state.endpoint,
});

const mapDispatchToProps = (dispatch: any) => ({
  onfetchCurrencyRate: (url: string) => dispatch(fetchBelarusRubleRate(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
