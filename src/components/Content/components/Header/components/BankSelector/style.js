import styled from 'styled-components';
import { Menu, MenuItem } from '@material-ui/core';
import { Button } from 'components/themes';

export const BankIconButton = styled(Button)`
  margin-bottom: 10px;
  cursor: pointer;

  @media (min-width: 769px) {
    margin-bottom: 0;
  }
`;

export const BankMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: theme.body,
  },
  '& .MuiButtonBase-root': {
    fontFamily: 'Ubuntu Condensed, sansSerif',
  },
}));

export const BankMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.text} !important;
`;

export const BankLocale = styled.div`
  position: absolute;
  width: 120px;
  bottom: 2px;
  font-size: 10px;
`;
