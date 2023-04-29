import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  background: #ffffff;
  width: 32px;
  height: 24px;
  border: 1px solid ${(props) => props.theme.palette.primary.dark};
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
    border-color: ${(props) => props.theme.palette.primary.dark};
  }
`;
