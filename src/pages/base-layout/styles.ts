import styled from 'styled-components';

export const BaseLayout = styled.div`
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'sidebar content ';
  height: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

export const Header = styled.div`
  grid-area: header;
`;

export const Sidebar = styled.div`
  grid-area: sidebar;
`;

export const Content = styled.div`
  grid-area: content;
`;
