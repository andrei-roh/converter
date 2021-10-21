import React, { useState } from 'react';
import Spinner from './Spinner/Spinner';

const Main = () => {
  let [showSpinner, setShowSpinner] = useState(false);

  return (
    <React.Fragment>{showSpinner ? <Spinner /> : 'CONTENT'}</React.Fragment>
  );
};

export default Main;
