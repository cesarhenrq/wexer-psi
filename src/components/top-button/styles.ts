import styled from 'styled-components';

export const Button = styled.button`
  margin-top: ${({ theme }) => theme.spacing(6)};
  background-color: transparent;
  color: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
`;
