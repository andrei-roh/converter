import styled from 'styled-components';

export const ButtonBlock = styled.div`
  position: fixed;
  bottom: 20px;
  right: 14px;

  @media (min-width: 501px) {
    bottom: 10px;
    right: 20px;
  }
`;

export const ButtonField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #dedede 1px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin: 16px 0;
  z-index: 1;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;
