import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { SideBarContext } from '../../contexts/SideBarContext';
import PeopleIcon from '../people-icon';
import ClipboardIcon from '../clipboard-icon';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ConfigureIcon from '../configure-icon';
import * as S from './styles';

const SideBar = () => {
  const { setIsOpen } = useContext(SideBarContext);
  const theme = useTheme();

  return (
    <S.SideBar theme={theme}>
      <S.Icon style={{ marginTop: 25 }} onClick={() => setIsOpen(true)}>
        <PeopleIcon />
      </S.Icon>
      <S.Icon onClick={() => setIsOpen(true)}>
        <ClipboardIcon color="white" width="24" height="24" />
      </S.Icon>
      <S.Icon onClick={() => setIsOpen(true)}>
        <AddCircleIcon color="secondary" />
      </S.Icon>
      <S.Icon onClick={() => setIsOpen(true)}>
        <ConfigureIcon />
      </S.Icon>
    </S.SideBar>
  );
};

export default SideBar;
