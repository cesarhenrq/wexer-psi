import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SideBarContext } from '../../contexts/SideBarContext';
import * as S from './styles';

const TopBar = () => {
  const { setIsOpen } = useContext(SideBarContext);

  const handleMenuButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <S.StyledAppBar position="static" color="secondary" elevation={0}>
      <S.StyledToolBar>
        <IconButton onClick={handleMenuButtonClick}>
          <MenuIcon color="primary" />
        </IconButton>
        <IconButton>
          <Typography color="primary">
            Bem-vindo(a), <b>Daniel</b>
          </Typography>
          <ArrowDropDownIcon />
        </IconButton>
      </S.StyledToolBar>
    </S.StyledAppBar>
  );
};

export default TopBar;
