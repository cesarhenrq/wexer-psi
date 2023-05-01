import { useContext, useEffect } from 'react';
import { useForm, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import {
  InputLabel,
  FormGroup,
  Grid,
  Box,
  Typography,
  TextField,
} from '@mui/material';
import { ModalContext } from '../../contexts/ModalContext';
import ModalBaseLayout from '../modal-base-layout';
import { ServiceContext } from '../../contexts/ServiceContext';
import { OccurrencesContext } from '../../contexts/OccurrencesContext';
import {
  postOccurrence,
  getOccurrences,
  editOccurrence,
} from '../../services/occurrence';
import { SubmitingContext } from '../../contexts/SubmitingContext';
import { EditingContext } from '../../contexts/EditingContext';
import { OccurrenceContext } from '../../contexts/OccurrenceContext';
import formatDate from '../../utils/functions/format-date';

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

  const { service } = useContext(ServiceContext);

  const { setOccurrences } = useContext(OccurrencesContext);

  const { occurrence } = useContext(OccurrenceContext);

  const { setIsSubmiting } = useContext(SubmitingContext);

  const { isEditing } = useContext(EditingContext);

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<PertinentFactFormType>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  useEffect(() => {
    const setFormData = () => {
      setValue('title', occurrence.title);
      setValue('date', formatDate(occurrence.createdOn));
      occurrence.content && setValue('description', occurrence.content);
    };

    reset();
    if (isEditing) {
      setFormData();
    }
  }, [isEditing, occurrence]);

  const onSubmit = async (data: PertinentFactFormType) => {
    setIsSubmiting(true);
    if (isEditing) {
      await editOccurrence(
        {
          title: data.title,
          content: data.description,
        },
        occurrence._id
      );
    } else {
      await postOccurrence({
        type: 'relevant_fact',
        timelineId: service._id,
        title: data.title,
        content: data.description,
      });
    }
    const occurrences = await getOccurrences(service._id);
    setOccurrences(occurrences);
    setIsSubmiting(false);
  };

  const resetForm = () => {
    reset(defaultValues);
  };

  const handleError = (name: keyof Partial<PertinentFactFormType>) => {
    return (
      errors &&
      errors[name] && (
        <Typography variant="body2" color="error">
          {errors[name].message}
        </Typography>
      )
    );
  };

  return (
    <ModalBaseLayout
      title={`${isEditing ? 'Editar' : 'Novo'} Fato Relevante`}
      modalState={modalsState.isPertinentFactModalOpen}
      modal="isPertinentFactModalOpen"
      buttonTitle={isEditing ? 'Editar' : 'Criar'}
      isFieldsRequired={true}
      onSubmit={handleSubmit(onSubmit)}
      resetForm={resetForm}
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
              disabled={isEditing}
            />
            {handleError('date')}
          </FormGroup>
        </Grid>
        <Grid item xs={12} sm={9}>
          <FormGroup>
            <InputLabel htmlFor="title-input">
              <Typography variant="caption">Título*</Typography>
            </InputLabel>
            <TextField
              id="title-input"
              placeholder="Digite"
              {...register('title')}
              error={Boolean(errors.title)}
            />
            {handleError('title')}
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%' }}>
            <FormGroup>
              <InputLabel htmlFor="description-input">
                <Typography variant="caption">Descrição*</Typography>
              </InputLabel>
              <TextField
                id="description-input"
                multiline
                rows={5}
                placeholder="Text"
                {...register('description')}
                error={Boolean(errors.description)}
              />
              {handleError('description')}
            </FormGroup>
          </Box>
        </Grid>
      </Grid>
    </ModalBaseLayout>
  );
};

export default PertinentFactModal;
