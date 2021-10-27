import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import { BigBlock, SmallBlock, Phrase } from './style';

const Error = ({ error }) => {
  return (
    <BigBlock>
      <SmallBlock>
        <ErrorIcon />
        <Phrase>{error}</Phrase>
      </SmallBlock>
    </BigBlock>
  );
};

export default Error;
