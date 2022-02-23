import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { Edge, Mistake, Phrase, Invisible } from './style';
import { IconButton } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { IError } from 'types';

const Error: React.FC<IError> = ({ error }) => {
  const { t } = useTranslation();
  const [showError, setShowError] = useState(false);
  const handleShowError = () => {
    setShowError(!showError);
  };
  return (
    <Edge>
      <Mistake>
        <Loader type="Grid" color="#f44336" height={250} width={250} />
        <Phrase variant="h4" color="secondary">
          {t('error')}
        </Phrase>
        {error ? (
          <>
            <IconButton
              onClick={handleShowError}
              title={t('showError')}
              color="secondary"
            >
              {showError ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            {showError ? (
              <Phrase color="secondary">{error}</Phrase>
            ) : (
              <Invisible>{error}</Invisible>
            )}
          </>
        ) : null}
      </Mistake>
    </Edge>
  );
};

export default Error;
