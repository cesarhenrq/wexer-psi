import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import SideBar from '../../components/side-bar';
import * as S from './styles';

const BaseLayout = () => {
  return (
    <S.BaseLayout>
      <S.Header>
        <Header />
      </S.Header>
      <S.Sidebar>
        <SideBar />
      </S.Sidebar>
      <S.Content>
        <Outlet />
      </S.Content>
    </S.BaseLayout>
  );
};

export default BaseLayout;
