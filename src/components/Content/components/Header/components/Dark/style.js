import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const DarkIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.text} !important;

  &:focus {
    color: #3f51b5 !important;
  }

  &:focus-visible {
    color: #3f51b5 !important;
  }
`;
