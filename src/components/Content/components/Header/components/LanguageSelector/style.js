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
    padding: '0 8px',
  },
}));

export const LanguageMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.text} !important;
`;
