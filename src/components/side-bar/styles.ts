import styled from 'styled-components';

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Icon = styled.div`
  margin: 25px 0 33.17px 0;
  cursor: pointer;
`;
