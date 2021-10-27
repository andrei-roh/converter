import styled from 'styled-components';

export const ButtonTextField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #dedede 1px;
  border-radius: 5px 5px 5px 0;
  height: 54px;
  margin: 16px 0 8px;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;
