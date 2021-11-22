import React from 'react';
import Loader from 'react-loader-spinner';
import { BigBlock, SmallBlock, Phrase } from './style';

const Error = ({ error }) => {
  return (
    <BigBlock>
      <SmallBlock>
        <Loader type="Grid" color="#e75f5f" height={250} width={250} />
        <Phrase>{error}</Phrase>
      </SmallBlock>
    </BigBlock>
  );
};

export default Error;
