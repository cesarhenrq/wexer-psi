import { useContext } from 'react';
import { useForm, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { TextField, InputLabel, FormGroup, Grid, Box } from '@mui/material';
import { ModalContext } from '../../contexts/ModalContext';
import ModalBaseLayout from '../modal-base-layout';

type PertinentFactFormType = {
  date: string;
  title: string;
  description: string;
};

const defaultValues: DefaultValues<PertinentFactFormType> = {
  date: '',
  title: '',
  description: '',
};

const PertinentFactModal = () => {
  const { modalsState } = useContext(ModalContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PertinentFactFormType>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data: PertinentFactFormType) => {
    return data;
  };
  return (
    <ModalBaseLayout
      title="Nova Fato Relevante"
      modalState={modalsState.isPertinentFactModalOpen}
      modal="isPertinentFactModalOpen"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={3}>
            <FormGroup>
              <InputLabel htmlFor="date-input">Data*</InputLabel>
              <TextField
                id="date-input"
                {...register('date')}
                error={Boolean(errors.date)}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={9}>
            <FormGroup>
              <InputLabel htmlFor="title-input">Título*</InputLabel>
              <TextField
                id="title-input"
                placeholder="Digite"
                {...register('title')}
                error={Boolean(errors.title)}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: '100%' }}>
              <FormGroup>
                <InputLabel htmlFor="description-input">Descrição*</InputLabel>
                <TextField
                  id="description-input"
                  multiline
                  rows={5}
                  placeholder="Text"
                  {...register('description')}
                  error={Boolean(errors.description)}
                />
              </FormGroup>
            </Box>
          </Grid>
        </Grid>
      </form>
    </ModalBaseLayout>
  );
};

export default PertinentFactModal;
