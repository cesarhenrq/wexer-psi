import PeopleIcon from '../people-icon';
import ClipboardIcon from '../clipboard-icon';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ConfigureIcon from '../configure-icon';
import * as S from './styles';

const NavMenu = () => {
  return (
    <S.NavMenu>
      <S.Icon style={{ marginTop: 25 }}>
        <PeopleIcon />
      </S.Icon>
      <S.Icon>
        <ClipboardIcon />
      </S.Icon>
      <S.Icon>
        <AddCircleIcon color="secondary" />
      </S.Icon>
      <S.Icon>
        <ConfigureIcon />
      </S.Icon>
    </S.NavMenu>
  );
};

export default NavMenu;
