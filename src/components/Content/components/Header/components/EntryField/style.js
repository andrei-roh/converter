import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const MainBlock = styled.div`
  min-width: 300px;
  width: 20%;
  margin: 0 8px 8px;

  @media (min-width: 769px) {
    margin: 0 35px;
  }
`;

export const MainTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    color: theme.text,
    fontSize: '16.4px',
  },
  '& .MuiInputBase-input': {
    color: theme.text,
    fontSize: '36px',
    padding: '14px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.text,
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: '#5d6dc6',
    },
  },
}));
