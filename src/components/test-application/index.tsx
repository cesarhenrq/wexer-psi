import { useTheme } from '@mui/material';
import * as S from './styles';

type TestApplicationProps = {
  handleNext: () => void;
  handleSkip: () => void;
};

const TestApplication = ({ handleNext, handleSkip }: TestApplicationProps) => {
  const theme = useTheme();
  return (
    <S.OutterBox theme={theme}>
      <form>
        <S.TitleBox theme={theme}>
          <S.BoldTypography color="primary.main" variant="h5">
            Aplicação de Teste
          </S.BoldTypography>
          <S.ButtonsBox theme={theme}>
            <S.StyledButton
              theme={theme}
              color="primary"
              variant="contained"
              onClick={handleNext}
            >
              <S.BoldTypography color="secondary.main">Salvar</S.BoldTypography>
            </S.StyledButton>
            <S.StyledButton
              theme={theme}
              color="secondary"
              variant="contained"
              onClick={handleSkip}
            >
              <S.BoldTypography color="primary.main">Pular</S.BoldTypography>
            </S.StyledButton>
          </S.ButtonsBox>
        </S.TitleBox>
      </form>
    </S.OutterBox>
  );
};

export default TestApplication;
