import styled from 'styled-components';

export const HeaderBlock = styled.div(({ theme }) => ({
  padding: '4px 0 10px 0',
  width: '100%',
  backgroundColor: theme.main,
  display: 'grid',
  gridTemplateRows: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10px',
  position: 'fixed',
  top: 0,
  zIndex: 2,

  '@media (min-width: 769px)': {
    display: 'grid',
    gridTemplateColumns: '7% 7% 7% 58% 21%',
    padding: '20px 10px',
    flexDirection: 'row',
  },
}));
