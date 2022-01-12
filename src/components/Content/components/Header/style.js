import styled from 'styled-components';

export const EmptyBlock = styled.div`
  height: 172px;
  width: 100%;

  @media (min-width: 769px) {
    height: 96px;
  }
`;

export const HeaderBlock = styled.div`
  padding: 12px 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  position: fixed;
  top: 0;
  z-index: 2;
  backdrop-filter: blur(6px);

  @media (min-width: 769px) {
    padding: 20px 0;
    flex-direction: row;
  }
`;

export const IconsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
