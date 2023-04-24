import { useTheme, InputLabel, FormGroup, Grid } from '@mui/material';
import { useState } from 'react';
import ReactQuill, { QuillChangeHandler } from 'react-quill';
import * as S from './styles';

type BehavioralObservationProps = {
  handleNext: () => void;
};

const BehavioralObservation = ({ handleNext }: BehavioralObservationProps) => {
  const theme = useTheme();

  const [synthesis, setSynthesis] = useState('');

  const handleChange: QuillChangeHandler = (value: string) => {
    setSynthesis(value);
    console.log(synthesis);
  };

  return (
    <S.OutterBox theme={theme}>
      <form>
        <S.TitleBox theme={theme}>
          <S.BoldTypography color="primary.main" variant="h5">
            Observação Comportamental
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
          </S.ButtonsBox>
        </S.TitleBox>
        <Grid container spacing={2} sx={{ p: 3 }}>
          <S.TextGrid item xs={12} sm={8} theme={theme}>
            <FormGroup>
              <InputLabel htmlFor="behavioral-observation-input" sx={{ mb: 2 }}>
                <S.BoldTypography variant="caption" color="preto">
                  Síntese das observações comportamentais
                </S.BoldTypography>
              </InputLabel>
              <ReactQuill
                id="behavioral-observation-input"
                onChange={handleChange}
                value={synthesis}
              />
            </FormGroup>
          </S.TextGrid>
          <Grid item xs={12} sm={12}>
            <S.ButtonsBox theme={theme}>
              <S.StyledButton theme={theme} color="primary" variant="contained">
                <S.BoldTypography color="secondary.main">
                  Salvar
                </S.BoldTypography>
              </S.StyledButton>
            </S.ButtonsBox>
          </Grid>
        </Grid>
      </form>
    </S.OutterBox>
  );
};

export default BehavioralObservation;
