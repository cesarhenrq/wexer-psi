import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SideBarContext } from '../../contexts/SideBarContext';

const TopBar = () => {
  const { setIsOpen } = useContext(SideBarContext);

  const handleMenuButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <AppBar
      position="static"
      color="secondary"
      elevation={0}
      sx={{
        height: 80,
        flex: 1,
        boxShadow: '0px 10px 10px -10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <IconButton onClick={handleMenuButtonClick}>
          <MenuIcon color="primary" />
        </IconButton>
        <IconButton>
          <Typography color="primary">
            Bem-vindo(a), <b>Daniel</b>
          </Typography>
          <ArrowDropDownIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
