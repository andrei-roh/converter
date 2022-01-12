import styled from 'styled-components';

export const ButtonBlock = styled.div`
  position: fixed;
  bottom: 10px;
  right: 6px;
  z-index: 2;

  @media (min-width: 501px) {
    bottom: 10px;
    right: 20px;
  }
`;
