import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const TextFieldBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SmallTextField = styled(TextField)(({ theme }) => ({
  minWidth: '224px !important',
  maxHeight: '56px !important',
  borderBottom: 'solid #fff 1px !important',
  boxSizing: 'border-box',
  caretColor: 'transparent',
  '& label': {
    color: theme.text,
  },
  '& .MuiInputBase-input': {
    color: theme.text,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  '& .MuiInputBase-root': {
    '&::before': {
      border: 'none',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.text,
    },
    '&:hover fieldset': {
      borderColor: theme.text,
    },
  },
}));
