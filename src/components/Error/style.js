import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const BigBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  width: 100%;
`;

export const SmallBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const Phrase = styled(Typography)`
  padding-top: 20px;
  color: #808080;
  text-align: center;
`;
