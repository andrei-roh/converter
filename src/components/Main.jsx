import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBelarusianRubleRate } from './redux/actions';
import Spinner from './Spinner/Spinner';
import Error from './Error/Error';
import Content from './Content/Content';

const Main = ({
  loading,
  error,
  belarusianRubleRate,
  belarusianRubleRateToOtherCurrencies,
  onfetchBelarusianRubleRate,
}) => {
  useEffect(() => {
    onfetchBelarusianRubleRate();
  }, [onfetchBelarusianRubleRate]);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <Content
          belarusianRubleRate={belarusianRubleRate}
          belarusianRubleRateToOtherCurrencies={
            belarusianRubleRateToOtherCurrencies
          }
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  belarusianRubleRate: state.belarusianRubleRate,
  belarusianRubleRateToOtherCurrencies:
    state.belarusianRubleRateToOtherCurrencies,
});

const mapDispatchToProps = (dispatch) => ({
  onfetchBelarusianRubleRate: () => dispatch(fetchBelarusianRubleRate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
