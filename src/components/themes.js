import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export const lightTheme = {
  body: '#FFF',
  text: '#000',
  header: '#FFF',
  light: '#4dabf5',
  main: '#2196f3',
  focus: '#8bc34a',
};

export const darkTheme = {
  body: '#363537',
  text: '#FFF',
  header: '#000',
  light: '#ff7961',
  main: '#f44336',
  focus: '#FFF',
};

export const Button = styled(IconButton)`
  max-width: 48px;
  margin: 0 auto !important;
  color: ${({ theme }) => theme.header} !important;

  &:focus {
    color: ${({ theme }) => theme.focus} !important;
  }

  &:focus-visible {
    color: ${({ theme }) => theme.focus} !important;
  }
`;

export const Flag = styled.img`
  width: 40px;
  height: 27px;
`;

export const Field = styled(TextField)(({ theme }) => ({
  maxHeight: '56px',
  boxSizing: 'border-box',
  '& .Mui-focused': {
    color: `${theme.focus} !important`,
  },
  '& .MuiInputBase-root': {
    '&::before': {
      border: 'none',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.light,
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: theme.light,
    },
    '&.Mui-focused fieldset': {
      borderColor: `${theme.focus} !important`,
    },
  },
}));
