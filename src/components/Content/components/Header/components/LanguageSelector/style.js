import styled from 'styled-components';
import { Menu, MenuItem } from '@material-ui/core';

export const LanguageMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: theme.body,
  },
}));

export const LanguageMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.text} !important;
`;

export const LanguageLocale = styled.span`
  position: absolute;
  top: 12%;
  left: 13%;
  font-size: 10px;
`;
