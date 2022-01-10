import styled from 'styled-components';
import { InputLabel, Menu, MenuItem } from '@material-ui/core';

export const BankIconButton = styled(InputLabel)`
  color: ${({ theme }) => theme.text} !important;

  &:focus {
    color: #3f51b5 !important;
  }

  &:focus-visible {
    color: #3f51b5 !important;
  }
`;

export const BankMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: theme.body,
  },
}));

export const BankMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.text} !important;
`;
