import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const SpinnerBigBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  background: #e5e5e5;
  height: 85vh;
  padding-top: 5vh;
  box-sizing: border-box;
  width: 100%;
`;

const SpinnerSmallBlock = styled.div`
  align-self: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

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
