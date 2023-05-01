import { useTheme, Divider, Typography, Box, Stack } from '@mui/material';
import * as S from './styles';
import EditButton from '../edit-button';
import ShowButton from '../show-button';
import ConfirmIcon from '../confirm-icon';

type PsychologicalAssessmentContentProps = {
  data: PsychologicalAssessmentType;
};

const PsychologicalAssessmentContent = ({
  data,
}: PsychologicalAssessmentContentProps) => {
  const theme = useTheme();
  return (
    <Box>
      <S.OutterBox theme={theme}>
        <S.InnerBox theme={theme}>
          <Typography color="secondary.dark">Entrevista Psicológica</Typography>
          <S.ActionBox>
            <S.TypographyBox theme={theme}>
              <Typography color="primary.main">
                {data.assessments?.interview ? 'Realizado' : 'Não Realizado'}
              </Typography>
            </S.TypographyBox>
            <S.ButtonsBox theme={theme}>
              <EditButton modal={'isAttachmentModalOpen'} isDisabled={false} />
              <ShowButton />
            </S.ButtonsBox>
          </S.ActionBox>
        </S.InnerBox>
        <Divider />
        <S.InnerBox theme={theme}>
          <Typography color="secondary.dark">Aplicação de teste</Typography>
          <S.ActionBox>
            <S.TypographyBox theme={theme}>
              <Typography color="primary.main">
                {data.assessments?.tests ? 'Realizado' : 'Não Realizado'}
              </Typography>
            </S.TypographyBox>
            <S.ButtonsBox theme={theme}>
              <EditButton modal={'isAttachmentModalOpen'} isDisabled={false} />
              <ShowButton />
            </S.ButtonsBox>
          </S.ActionBox>
        </S.InnerBox>
        <Divider />
        <S.InnerBox theme={theme}>
          <Typography color="secondary.dark">
            Observação comportamental
          </Typography>
          <S.ActionBox>
            <S.TypographyBox theme={theme}>
              <Typography color="primary.main">
                {data.assessments?.observation !== ''
                  ? 'Realizado'
                  : 'Não Realizado'}
              </Typography>
            </S.TypographyBox>
            <S.ButtonsBox theme={theme}>
              <EditButton modal={'isAttachmentModalOpen'} isDisabled={false} />
              <ShowButton />
            </S.ButtonsBox>
          </S.ActionBox>
        </S.InnerBox>
      </S.OutterBox>
      <S.EmitButton>
        <Typography variant="caption" color="secondary.dark">
          Emitir
        </Typography>
      </S.EmitButton>
      <Stack direction="row" spacing={2}>
        <S.ServiceBox theme={theme}>
          <ConfirmIcon />
          <S.ServiceTypography>Laudo</S.ServiceTypography>
        </S.ServiceBox>
        <S.ServiceBox theme={theme} isDisabled={true}>
          {false && <ConfirmIcon />}
          <S.ServiceTypography>Atestado</S.ServiceTypography>
        </S.ServiceBox>
        <S.ServiceBox theme={theme} isDisabled={true}>
          {false && <ConfirmIcon />}
          <S.ServiceTypography>Relatatório</S.ServiceTypography>
        </S.ServiceBox>
        <S.ServiceBox theme={theme} isDisabled={true}>
          {false && <ConfirmIcon />}
          <S.ServiceTypography>Entrevista</S.ServiceTypography>
        </S.ServiceBox>
      </Stack>
    </Box>
  );
};

export default PsychologicalAssessmentContent;
