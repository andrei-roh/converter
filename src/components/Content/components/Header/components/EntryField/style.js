import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const MainBlock = styled.div`
  min-width: 250px;
  width: 20%;
  margin: 0 8px 8px;

  @media (min-width: 769px) {
    margin: 0 20px 0 10px;
  }
`;

export const MainTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    color: theme.text,
  },
  '& .MuiInputBase-input': {
    color: theme.text,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.text,
    },
    '&:hover fieldset': {
      borderColor: '#5d6dc6',
    },
  },
}));
