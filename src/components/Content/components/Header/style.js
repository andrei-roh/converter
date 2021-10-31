import styled from 'styled-components';

export const EmptyBlock = styled.div`
  height: 96px;
  width: 100%;
`;

export const HeaderBlock = styled.div`
  padding: 20px 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  position: fixed;
  top: 0;
  z-index: 2;
  backdrop-filter: blur(6px);
`;

export const EmptyElement = styled.div`
  width: 24px;
  height: 24px;
  padding: 12px;
`;
