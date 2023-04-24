import {
  InputLabel,
  FormGroup,
  Grid,
  useTheme,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from '@mui/material';
import * as S from './styles';

type PsychologicalInterviewProps = {
  handleNext: () => void;
  handleSkip: () => void;
};

const PsychologicalInterview = ({
  handleNext,
  handleSkip,
}: PsychologicalInterviewProps) => {
  const theme = useTheme();
  return (
    <S.OutterBox theme={theme}>
      <form>
        <S.TitleBox theme={theme}>
          <S.BoldTypography color="primary.main" variant="h5">
            Entrevista Psicológica
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

        <Grid container spacing={2} sx={{ p: 3 }}>
          <Grid item xs={12} sm={12}>
            <FormGroup>
              <InputLabel htmlFor="date-input">
                <S.BoldTypography variant="caption" color="secondary.dark">
                  Sintese da entrevista
                </S.BoldTypography>
              </InputLabel>
              <TextField
                multiline
                rows={5}
                placeholder="Nos dados registrados e observados durante a entrevista o(a) avaliado(a) declarou estar..."
                id="date-input"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={12}>
            <S.BoldTypography color="info.main" mb={1}>
              Condições para realização da avaliação
            </S.BoldTypography>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="rest">
                <S.BoldTypography color="black" variant="caption">
                  01 - Está descansado hoje?
                </S.BoldTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="rest"
                defaultValue="true"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="rest-well">
                <S.BoldTypography color="black" variant="caption">
                  02 - Dormiu bem esta noite?
                </S.BoldTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="rest-well"
                defaultValue="true"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="eating">
                <S.BoldTypography color="black" variant="caption">
                  03 - Está se alimentando?
                </S.BoldTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="eating"
                defaultValue="true"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="drinking">
                <S.BoldTypography color="black" variant="caption">
                  04 - Fez uso de bebida alcólica nas últimas horas?
                </S.BoldTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="drinking"
                defaultValue="true"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="pills">
                <S.BoldTypography color="black" variant="caption">
                  05 - Fez uso de alguma medicação ontem/hoje?
                </S.BoldTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="pills"
                defaultValue="true"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="glass">
                <S.BoldTypography color="black" variant="caption">
                  06 - Faz uso de lentes corretivas/óculos?
                </S.BoldTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="glass"
                defaultValue="true"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="is-able">
                <S.BoldTypography color="black" variant="caption">
                  07 - Considera-se em boas condições para realização da
                  avaliação psicológica?
                </S.BoldTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="is-able"
                defaultValue="true"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <S.BoldTypography color="info.main" mb={1}>
              Histórico familiar
            </S.BoldTypography>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="civil-state">
                <S.BoldTypography color="black" variant="caption">
                  08 - Estado civil:
                </S.BoldTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="civil-state"
                defaultValue="single"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="divorced"
                  control={<Radio />}
                  label="Divorciado"
                />
                <FormControlLabel
                  value="widower"
                  control={<Radio />}
                  label="Viúvo"
                />
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Solteiro"
                />
                <FormControlLabel
                  value="married"
                  control={<Radio />}
                  label="Casado"
                />
                <FormControlLabel
                  value="stable-union"
                  control={<Radio />}
                  label="União estável"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="children">
                <S.BoldTypography color="black" variant="caption">
                  09 - Possui filhos?
                </S.BoldTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="children"
                defaultValue="true"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="children">
                <S.BoldTypography color="black" variant="caption">
                  10 - Com quem você mora?
                </S.BoldTypography>
              </FormLabel>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="family-issues">
                <S.BoldTypography color="black" variant="caption">
                  11 - Está enfrentando problemas familiares?
                </S.BoldTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="family-issues"
                defaultValue="true"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="family-issues">
                <S.BoldTypography color="black" variant="caption">
                  12 - Possui irmãos?
                </S.BoldTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="family-issues"
                defaultValue="true"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="family-engage">
                <S.BoldTypography color="black" variant="caption">
                  13 - Como é seu relacionamento com sua família?
                </S.BoldTypography>
              </FormLabel>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="has-medical-care">
                <S.BoldTypography color="black" variant="caption">
                  14- Na família existe alguém que necessite de cuidados médicos
                  ou psicológicos?
                </S.BoldTypography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="has-medical-care"
                defaultValue="true"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </S.OutterBox>
  );
};

export default PsychologicalInterview;
