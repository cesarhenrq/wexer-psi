import PeopleIcon from '../people-icon';
import ClipboardIcon from '../clipboard-icon';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ConfigureIcon from '../configure-icon';
import * as S from './styles';

const SideBar = () => {
  return (
    <S.SideBar>
      <S.Icon style={{ marginTop: 25 }}>
        <PeopleIcon />
      </S.Icon>
      <S.Icon>
        <ClipboardIcon color="white" width="24" height="24" />
      </S.Icon>
      <S.Icon>
        <AddCircleIcon color="secondary" />
      </S.Icon>
      <S.Icon>
        <ConfigureIcon />
      </S.Icon>
    </S.SideBar>
  );
};

export default SideBar;
