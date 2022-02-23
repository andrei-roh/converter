import styled from 'styled-components';

export const EmptyBlock = styled.div`
  height: 150px;
  width: 100%;

  @media (min-width: 769px) {
    height: 120px;
  }
`;

export const HeaderBlock = styled.div(({ theme }) => ({
  padding: '4px 0 10px 0',
  width: '100%',
  backgroundColor: theme.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10px',
  position: 'fixed',
  top: 0,
  zIndex: 2,

  '@media (min-width: 769px)': {
    padding: '20px 0',
    flexDirection: 'row',
  },
}));

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
