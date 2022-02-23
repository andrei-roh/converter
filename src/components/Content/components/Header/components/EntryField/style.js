import styled from 'styled-components';
import { Field } from 'components/themes';

export const MainBlock = styled.div`
  min-width: 300px;
  width: 20%;
  margin: 0 8px 8px;

  @media (min-width: 769px) {
    margin: 0 35px;
  }
`;

export const MainTextField = styled(Field)(({ theme }) => ({
  '& label': {
    color: theme.header,
    fontSize: '16.4px',
  },
  '& .MuiInputBase-input': {
    color: theme.header,
    fontSize: '28px',
    padding: '14px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.header,
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: theme.header,
    },
    '&:focus fieldset': {
      borderColor: theme.header,
    },
  },
}));
