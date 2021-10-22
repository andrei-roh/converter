import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import { ErrorBigBlock, ErrorSmallBlock, ErrorPhrase } from './style';

const Error = ({ error }) => {
  return (
    <ErrorBigBlock>
      <ErrorSmallBlock>
        <ErrorIcon />
        <ErrorPhrase>{error}</ErrorPhrase>
      </ErrorSmallBlock>
    </ErrorBigBlock>
  );
};

export default Error;
