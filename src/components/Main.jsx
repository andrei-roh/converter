import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBelarusianRubleRate } from './redux/actions';
import Spinner from './Spinner/Spinner';

const Main = ({
  loading,
  belarusianRubleRate,
  belarusianRubleRateToOtherCurrencies,
  onfetchBelarusianRubleRate,
}) => {
  useEffect(() => {
    onfetchBelarusianRubleRate();
  }, []);
  const content = belarusianRubleRateToOtherCurrencies.map((element) => (
    <div key={element.Cur_ID}>
      <div>{element.Cur_Name}</div>
      <div>{element.Cur_OfficialRate}</div>
      <div>{element.Cur_Scale}</div>
    </div>
  ));
  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div>{`Белорусский рубль: ${belarusianRubleRate}`}</div>
          <div>{content}</div>
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  belarusianRubleRate: state.belarusianRubleRate,
  belarusianRubleRateToOtherCurrencies:
    state.belarusianRubleRateToOtherCurrencies,
});

const mapDispatchToProps = (dispatch) => ({
  onfetchBelarusianRubleRate: () => dispatch(fetchBelarusianRubleRate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
