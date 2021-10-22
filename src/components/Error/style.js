import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const ErrorBigBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fffff;
  height: 100vh;
  box-sizing: border-box;
  width: 100%;
`;

export const ErrorSmallBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const ErrorPhrase = styled(Typography)`
  padding-top: 40px;
  color: #808080;
`;
