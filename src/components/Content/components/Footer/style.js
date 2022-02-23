import styled from 'styled-components';

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
