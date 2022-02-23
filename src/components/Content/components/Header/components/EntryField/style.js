import styled from 'styled-components';
import { Field } from 'components/themes';

export const MainBlock = styled.div`
  min-width: 300px;
  width: 20%;
  margin: 10px auto;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;

  @media (min-width: 769px) {
    margin: 0 auto;
    grid-column-start: auto;
    grid-column-end: auto;
    grid-row-start: auto;
    grid-row-end: auto;
  }
`;

export const MainTextField = styled(Field)(({ theme }) => ({
  '& label': {
    color: theme.header,
    fontSize: '16.4px',
    fontFamily: 'Ubuntu Condensed, sansSerif',
  },
  '& .MuiInputBase-input': {
    color: theme.header,
    fontSize: '28px',
    padding: '14px',
    fontFamily: 'Ubuntu Condensed, sansSerif',
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
