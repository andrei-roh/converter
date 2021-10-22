import React from 'react';
import Loader from 'react-loader-spinner';
import { SpinnerBigBlock, SpinnerSmallBlock } from './style';

const Spinner = () => {
  return (
    <SpinnerBigBlock>
      <SpinnerSmallBlock>
        <Loader type="Watch" color="#0064EB" height={250} width={250} />
      </SpinnerSmallBlock>
    </SpinnerBigBlock>
  );
};

export default Spinner;
