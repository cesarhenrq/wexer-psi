import Logo from '../logo';
import TopBar from '../top-bar';
import * as S from './styles.js';

const Header = () => {
  return (
    <S.Header>
      <Logo />
      <TopBar />
    </S.Header>
  );
};

export default Header;
