import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { useForm, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import {
  TextField,
  InputLabel,
  FormGroup,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import ModalBaseLayout from '../modal-base-layout';

type PsychologicalAssessmentFormType = {
  date: string;
  title: string;
  description: string;
};

const defaultValues: DefaultValues<PsychologicalAssessmentFormType> = {
  date: '',
};

const PsychologicalAssessmentModal = () => {
  const { modalsState } = useContext(ModalContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PsychologicalAssessmentFormType>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data: PsychologicalAssessmentFormType) => {
    return data;
  };

  return (
    <ModalBaseLayout
      title="Nova Avaliação Psicológica"
      modalState={modalsState.isPsychologicalAssessmentModalOpen}
      modal="isPsychologicalAssessmentModalOpen"
      buttonTitle="Prosseguir"
      isFieldsRequired={true}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={3}>
          <FormGroup>
            <InputLabel htmlFor="date-input">
              <Typography variant="caption">Data*</Typography>
            </InputLabel>
            <TextField
              id="date-input"
              {...register('date')}
              error={Boolean(errors.date)}
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            sx={{ bgcolor: 'primary.light', borderRadius: 2, p: 2 }}
          >
            <Box sx={{ width: '100%' }}>
              <Typography color="primary" sx={{ fontWeight: 'bold' }}>
                Atenção!
              </Typography>
              <Typography>
                Você será{' '}
                <b>
                  <i>redirecionado para uma nova página</i>
                </b>{' '}
                onde irá preencher os dados da avaliação psicológica.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ModalBaseLayout>
  );
};

export default PsychologicalAssessmentModal;
