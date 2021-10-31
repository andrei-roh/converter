import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const BigBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fffff;
  box-sizing: border-box;
  width: 100%;
`;

export const SmallBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
  min-width: 250px;
  margin-top: 10px;

  @media (min-width: 501px) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    margin-top: 15px;
  }

  @media (min-width: 769px) {
    display: grid;
    width: 90%;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 20px;
  }
`;

export const More = styled(Button)`
  color: ${({ theme }) => theme.text} !important;
  background: ${({ theme }) => theme.more} !important;
  border: solid 1px ${({ theme }) => theme.border} !important;
`;
