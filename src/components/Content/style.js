import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Full = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fffff;
  box-sizing: border-box;
  width: 100%;
`;

export const Starter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  max-width: 1440px;
  margin-top: 10px;

  @media (min-width: 501px) {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
    margin-top: 15px;
  }

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 20px;
  }

  @media (min-width: 1201px) {
    display: grid;
    width: 80%;
    grid-gap: 15px;
    margin-top: 20px;
  }
`;

export const More = styled(Button)(({ theme }) => ({
  fontSize: '20px !important',
  marginTop: '16px !important',
  color: `${theme.header} !important`,
  background: `${theme.main} !important`,

  '&:focus': {
    color: `${theme.focus} !important`,
  },

  '&:focus-visible': {
    color: `${theme.focus} !important`,
  },
}));
