import styled from 'styled-components';

export const VerticalLine = styled.div`
  position: absolute;
  top: -50px;
  left: ${({ theme }) => theme.spacing(5)};
  z-index: 1;
  width: 2px;
  height: 50px;
  background-color: ${({ color }) => color};
  transform: rotate(180deg);
`;
