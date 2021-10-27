import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBelarusRubleRate } from './redux/actions';
import Spinner from './Spinner/Spinner';
import Error from './Error/Error';
import Content from './Content/Content';

const Main = ({
  loading,
  error,
  defaultValue,
  belarusRuble,
  belarusRubleToOther,
  onfetchBelarusRubleRate,
}) => {
  useEffect(() => {
    onfetchBelarusRubleRate();
  }, [onfetchBelarusRubleRate]);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  defaultValue: state.defaultValue,
  belarusRuble: state.belarusRuble,
  belarusianRubleRate: state.belarusianRubleRate,
  belarusRubleToOther: state.belarusRubleToOther,
});

const mapDispatchToProps = (dispatch) => ({
  onfetchBelarusRubleRate: () => dispatch(fetchBelarusRubleRate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
