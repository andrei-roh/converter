import styled from 'styled-components';
import { IconButton, Menu, MenuItem } from '@material-ui/core';

export const LanguageIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.text} !important;

  &:focus {
    color: #3f51b5 !important;
  }

  &:focus-visible {
    color: #3f51b5 !important;
  }
`;

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
