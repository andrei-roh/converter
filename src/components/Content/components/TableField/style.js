import styled from 'styled-components';
import { Field } from 'components/themes';

export const TextFieldBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const SmallTextField = styled(Field)(({ theme }) => ({
  minWidth: '224px',
  maxWidth: '300px',
  caretColor: 'transparent',
  '& label': {
    color: theme.text,
  },
  '& .MuiInputBase-input': {
    color: theme.text,
    fontSize: '28px',
    padding: '14px',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  '& .MuiOutlinedInput-adornedEnd': {
    paddingRight: '8px',
  },
}));
