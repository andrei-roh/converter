import styled from 'styled-components';

export const ScrollUpBlock = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 3;

  @media (min-width: 501px) {
    right: 20px;
  }
`;
