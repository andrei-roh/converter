import styled from 'styled-components';

export const ContentBigBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fffff;
  box-sizing: border-box;
  width: 100%;
  padding-top: 40px;
`;

export const ContentSmallBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  align-items: center;
  padding-bottom: 40px;

  @media (min-width: 501px) {
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 769px) {
    width: 80%;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const ContentMainTextField = styled.div`
  margin-bottom: 20px;
  min-width: 250px;
  width: 20%;
`;