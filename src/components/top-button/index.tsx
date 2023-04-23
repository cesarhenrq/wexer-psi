import { Typography, useTheme } from '@mui/material';
import * as S from './styles';
import TopIcon from '../top-icon';

const TopButton = () => {
  const theme = useTheme();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.Button onClick={handleClick} theme={theme}>
      <TopIcon />
      <Typography ml={1}>Voltar para o topo</Typography>
    </S.Button>
  );
};

export default TopButton;
