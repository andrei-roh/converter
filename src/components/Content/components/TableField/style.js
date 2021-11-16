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
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.text,
    },
    '&:hover fieldset': {
      borderColor: theme.text,
    },
  },
}));
