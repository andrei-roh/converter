import React from 'react';
import Loader from 'react-loader-spinner';
import { BigBlock, SmallBlock } from './style';

const Spinner = () => {
  return (
    <BigBlock>
      <SmallBlock>
        <Loader type="Watch" color="#0064EB" height={250} width={250} />
      </SmallBlock>
    </BigBlock>
  );
};

export default Spinner;
