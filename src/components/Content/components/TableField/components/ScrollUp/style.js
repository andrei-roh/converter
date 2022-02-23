import styled from 'styled-components';
import { Button } from 'components/themes';

export const ScrollUpBlock = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 3;

  @media (min-width: 501px) {
    bottom: 5px;
    right: 10px;
  }

  @media (min-width: 769px) {
    bottom: 5px;
    right: 20px;
  }
`;

export const ScrollUpButton = styled(Button)`
  max-width: inherit;
  color: ${({ theme }) => theme.focus} !important;
`;
