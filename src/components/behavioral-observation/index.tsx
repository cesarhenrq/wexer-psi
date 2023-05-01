import { useTheme, InputLabel, FormGroup, Grid } from '@mui/material';
import ReactQuill from 'react-quill';
import * as S from './styles';
import useQuill from '../../hooks/use-quill';
import { MODULES } from '../../utils/constants';

const BehavioralObservation = () => {
  const theme = useTheme();

  const { onSubmit, handleSubmit, onEditorStateChange, editorContent } =
    useQuill();

  return (
    <S.OutterBox theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.TitleBox theme={theme}>
          <S.BoldTypography color="primary.main" variant="h5">
            Observação Comportamental
          </S.BoldTypography>
          <S.ButtonsBox theme={theme}>
            <S.StyledButton
              theme={theme}
              color="primary"
              variant="contained"
              type="submit"
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
                theme="snow"
                value={editorContent}
                onChange={onEditorStateChange}
                modules={MODULES}
              />
            </FormGroup>
          </S.TextGrid>
          <Grid item xs={12} sm={12}>
            <S.ButtonsBox theme={theme}>
              <S.StyledButton
                theme={theme}
                color="primary"
                variant="contained"
                type="submit"
              >
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
