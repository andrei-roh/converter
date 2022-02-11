import styled from 'styled-components';

export const EmptyBlock = styled.div`
  height: 134px;
  width: 100%;

  @media (min-width: 769px) {
    height: 96px;
  }
`;

export const HeaderBlock = styled.div`
  padding: 4px 0 10px 0;
  width: 100%;
  background-color: rgba(63, 81, 181, 0.22);
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
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 8px;

  @media (min-width: 769px) {
    width: auto;
    justify-content: center;
    margin-bottom: 0;
  }
`;

export const MobileSelector = styled.div`
  display: inherit;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DesktopSelector = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: inherit;
    width: 96px;
  }
`;
