import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const TextFieldBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SmallTextField = styled(TextField)`
  min-width: 224px !important;
`;
