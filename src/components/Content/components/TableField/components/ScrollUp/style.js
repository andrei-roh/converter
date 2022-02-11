import styled from 'styled-components';

export const ScrollUpBlock = styled.div`
  position: fixed;
  bottom: 6px;
  right: 6px;
  z-index: 3;

  @media (min-width: 501px) {
    right: 20px;
  }
`;
