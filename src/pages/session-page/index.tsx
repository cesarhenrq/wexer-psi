import { useTheme, Typography, Box, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import * as S from './styles';
import EditButton from '../../components/edit-button';
import DeleteButton from '../../components/delete-button';
import SessionModal from '../../components/session-modal';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { OccurrenceContext } from '../../contexts/OccurrenceContext';
import changeDate from '../../utils/functions/change-date';
import { ServiceContext } from '../../contexts/ServiceContext';
import { OccurrencesContext } from '../../contexts/OccurrencesContext';
import { getOccurrences, deleteOccurrence } from '../../services/occurrence';
import { EditingContext } from '../../contexts/EditingContext';

const SessionPage = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const { occurrence, setOccurrence } = useContext(OccurrenceContext);

  const { service } = useContext(ServiceContext);

  const { occurrences, setOccurrences } = useContext(OccurrencesContext);

  const { setIsEditing, isEditing } = useContext(EditingContext);

  useEffect(() => {
    setIsEditing(true);
  }, [isEditing]);

  useEffect(() => {
    if (isEditing) {
      const occurrence2 = occurrences.find(
        (occur) => occur._id === occurrence._id
      );

      occurrence2 && setOccurrence(occurrence2);
    }
  }, [occurrences, isEditing]);

  const handleBack = () => {
    navigate({ pathname: '/prontuário' });
  };

  const handleDelete = async () => {
    await deleteOccurrence(service._id, occurrence._id);
    const occurrences = await getOccurrences(service._id);
    setOccurrences(occurrences);
    handleBack();
  };

  return (
    <>
      <SessionModal />
      <S.NavBox theme={theme}>
        <Button
          startIcon={<ArrowBackIosNewIcon sx={{ color: 'black' }} />}
          onClick={handleBack}
          sx={{
            '&:hover': { backgroundColor: 'transparent' },
          }}
        >
          <Typography color="secondary.dark">Voltar</Typography>
        </Button>
      </S.NavBox>
      <S.Container theme={theme}>
        <Typography color="black" variant="h5">
          Sessão
        </Typography>
        <S.ContentBox theme={theme}>
          <S.TitleBox>
            <Typography sx={{ fontWeight: 'bold' }}>
              {occurrence.title}
            </Typography>
            <S.ButtonsBox theme={theme}>
              <EditButton isDisabled={false} modal="isSessionModalOpen" />
              <DeleteButton isDisabled={false} handleDelete={handleDelete} />
            </S.ButtonsBox>
          </S.TitleBox>

          <Typography color="secondary.dark" variant="caption">
            {`${changeDate(occurrence.createdOn)} | 16:00h - 17:00h`}
          </Typography>
          <Typography mt={2} mb={3}>
            {occurrence.content}
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }} mb={1}>
            Pagamento
          </Typography>
          <S.PaymentBox theme={theme}>
            <Box>
              <Typography variant="subtitle1" color="secondary.dark">
                Valor
              </Typography>
              <Typography variant="caption">
                R${occurrence.payment?.value},00
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" color="secondary.dark">
                Forma de pagamento
              </Typography>
              <Typography variant="caption">
                {occurrence.payment?.method}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" color="secondary.dark">
                Status
              </Typography>
              <Typography variant="caption">
                {occurrence.payment?.status}
              </Typography>
            </Box>
          </S.PaymentBox>
        </S.ContentBox>
      </S.Container>
    </>
  );
};

export default SessionPage;
