import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const TextFieldBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const SmallTextField = styled(TextField)(({ theme }) => ({
  minWidth: '224px',
  maxWidth: '260px',
  maxHeight: '56px',
  boxSizing: 'border-box',
  caretColor: 'transparent',
  '& label': {
    color: theme.text,
  },
  '& .MuiInputBase-input': {
    color: theme.text,
    fontSize: '22px',
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
  '& .MuiOutlinedInput-adornedEnd': {
    paddingRight: '4px',
  },
}));
