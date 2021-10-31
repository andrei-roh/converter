import styled from 'styled-components';

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

  @media (min-width: 501px) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 769px) {
    display: grid;
    width: 90%;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
