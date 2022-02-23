import styled from 'styled-components';

export const EmptyBlock = styled.div`
  height: 26px;
  width: 100%;

  @media (min-width: 769px) {
    height: 86px;
    width: 100%;
  }
`;

export const FooterBlock = styled.div(({ theme }) => ({
  display: 'none',

  '@media (min-width: 769px)': {
    padding: '26px 0',
    width: '100%',
    color: theme.header,
    backgroundColor: theme.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px',
    position: 'fixed',
    bottom: 0,
    zIndex: 2,
  },
}));
