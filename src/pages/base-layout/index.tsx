import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import SideBar from '../../components/side-bar';
import SideBarDrawer from '../../components/side-bar-drawer';
import { SideBarContext } from '../../contexts/SideBarContext';
import * as S from './styles';

const BaseLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/prontuário');
  }, []);

  return (
    <SideBarContext.Provider value={{ setIsOpen, isOpen }}>
      <S.BaseLayout>
        <S.Header>
          <Header />
        </S.Header>
        <S.Sidebar>
          <SideBarDrawer />
          <SideBar />
        </S.Sidebar>
        <S.Content>
          <Outlet />
        </S.Content>
      </S.BaseLayout>
    </SideBarContext.Provider>
  );
};

export default BaseLayout;
