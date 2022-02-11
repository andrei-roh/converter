import styled from 'styled-components';

export const EmptyBlock = styled.div`
  height: 86px;
  width: 100%;
`;

export const FooterBlock = styled.div`
  padding: 26px 0;
  width: 100%;
  background-color: rgba(63, 81, 181, 0.22);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  backdrop-filter: blur(6px);
`;
