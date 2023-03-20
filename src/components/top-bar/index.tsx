import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const TopBar = () => {
  return (
    <Box sx={{ heigth: 80, width: 1435 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            alignItens: 'center',
            justifyContent: 'space-between',
          }}
        >
          <IconButton>
            <MenuIcon />
          </IconButton>
          <IconButton>
            Bem vindo(a), Daniel <ArrowDropDownIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
