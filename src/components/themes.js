import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  border: 'null',
  change: 'rgba(0, 0, 0, 0.09)',
};

export const darkTheme = {
  body: '#363537',
  text: '#FFF',
  border: '#FFF',
  change: '#363537',
};

export const Button = styled(IconButton)`
  color: ${({ theme }) => theme.text} !important;

  &:focus {
    color: #3f51b5 !important;
  }

  &:focus-visible {
    color: #3f51b5 !important;
  }
`;

export const Flag = styled.img`
  margin: 0 5px;
`;
