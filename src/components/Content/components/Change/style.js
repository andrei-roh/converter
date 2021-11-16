import styled from 'styled-components';

export const ButtonField = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #dedede 1px;
  border-radius: 5px 5px 5px 0;
  height: 56px;
  max-width: 24px;
  margin: 16px 0 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.change};

  &:hover {
    background: rgba(0, 0, 0, 0.13);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  &:focus {
    border: solid #3f51b5 2px;
    color: #3f51b5;
  }

  &:focus-visible {
    border: solid #3f51b5 1px;
    outline: solid #3f51b5 1px;
    color: #3f51b5;
  }
`;
