import styled from 'styled-components';
import { IconButton, Menu, MenuItem } from '@material-ui/core';

export const BankIconButton = styled(IconButton)`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text} !important;
  cursor: pointer;
  order: 2;

  &:focus {
    color: #3f51b5 !important;
  }

  &:focus-visible {
    color: #3f51b5 !important;
  }

  @media (min-width: 769px) {
    margin-bottom: 0;
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

export const BankLocale = styled.div`
  position: absolute;
  width: 70px;
  bottom: 2px;
  font-size: 10px;
`;
