import styled from 'styled-components';

export const Edge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
`;

export const Wheel = styled.div`
  align-self: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
