import { useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import { SideBarContext } from '../../contexts/SideBarContext';
import DrawerList from '../drawer-list';

const SideBarDrawer = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      BackdropProps={{ invisible: true }}
    >
      <DrawerList />
    </Drawer>
  );
};

export default SideBarDrawer;
