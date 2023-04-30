import { useContext, useState, ChangeEvent, useEffect } from 'react';
import { useForm, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import {
  InputLabel,
  FormGroup,
  Grid,
  Box,
  Typography,
  useTheme,
  TextField,
} from '@mui/material';
import { ModalContext } from '../../contexts/ModalContext';
import { ServiceContext } from '../../contexts/ServiceContext';
import { OccurrencesContext } from '../../contexts/OccurrencesContext';
import {
  postOccurrence,
  getOccurrences,
  editOccurrence,
} from '../../services/occurrence';
import ModalBaseLayout from '../modal-base-layout';
import * as S from './styles';
import { SubmitingContext } from '../../contexts/SubmitingContext';
import { EditingContext } from '../../contexts/EditingContext';
import { OccurrenceContext } from '../../contexts/OccurrenceContext';
import formatDate from '../../utils/functions/format-date';

type AttachmentModalFormType = {
  date: string;
  title: string;
  description: string;
  files: { filename: string; filesize: number }[];
};

const defaultValues: DefaultValues<AttachmentModalFormType> = {
  date: '',
  title: '',
  description: '',
  files: [],
};

const AttachmentModal = () => {
  const { modalsState } = useContext(ModalContext);

  const { service } = useContext(ServiceContext);

  const { setOccurrences } = useContext(OccurrencesContext);

  const { occurrence } = useContext(OccurrenceContext);

  const { setIsSubmiting } = useContext(SubmitingContext);

  const { isEditing } = useContext(EditingContext);

  const [files, setFiles] = useState<{ filename: string; filesize: number }[]>(
    []
  );

  const theme = useTheme();

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AttachmentModalFormType>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  useEffect(() => {
    const setFormData = () => {
      setValue('title', occurrence.title);
      setValue('date', formatDate(occurrence.createdOn));
      occurrence.content && setValue('description', occurrence.content);
      if (occurrence.files) {
        setValue('files', occurrence.files);
        setFiles(occurrence.files);
      }
    };

    if (isEditing) {
      setFormData();
    }
  }, [isEditing, occurrence]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const fileList = Array.from(files).map((file) => ({
      filename: file.name,
      filesize: file.size,
    }));
    setFiles(fileList);
    setValue('files', fileList);
  };

  const onSubmit = async (data: AttachmentModalFormType) => {
    setIsSubmiting(true);
    isEditing
      ? await editOccurrence(
          {
            title: data.title,
            content: data.description,
            files: files,
          },
          occurrence._id
        )
      : await postOccurrence({
          type: 'attachment',
          timelineId: service._id,
          title: data.title,
          content: data.description,
          files: files,
        });
    const occurrences = await getOccurrences(service._id);
    setOccurrences(occurrences);
    setIsSubmiting(false);
  };

  const handleFileButtonClick = () => {
    document.getElementById('attachment-input')?.click();
  };

  const resetForm = () => {
    reset(defaultValues);
    setFiles([]);
  };

  const handleError = (name: keyof Partial<AttachmentModalFormType>) => {
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
      title={`${isEditing ? 'Editar' : 'Novo'} Anexo`}
      modalState={modalsState.isAttachmentModalOpen}
      modal="isAttachmentModalOpen"
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
              placeholder="14/06/2021"
              id="date-input"
              {...register('date')}
              error={!!errors.date}
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
              error={!!errors.title}
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
                error={!!errors.description}
              />
              {handleError('description')}
            </FormGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <InputLabel htmlFor="attachment-input">
              <Typography variant="caption">Anexar arquivos*</Typography>
            </InputLabel>
            <S.ButtonContainer>
              <S.InputFileButton
                variant="contained"
                theme={theme}
                onClick={handleFileButtonClick}
              >
                <input
                  id="attachment-input"
                  accept="application/pdf"
                  multiple
                  hidden
                  type="file"
                  onChange={handleFileUpload}
                />
                <Typography variant="subtitle1">
                  Escolher arquivos...
                </Typography>
              </S.InputFileButton>
            </S.ButtonContainer>
            {files.map((file, index) => (
              <div style={{ flex: 1 }} key={index}>
                <Typography color="secondary.dark" variant="subtitle1">
                  {file.filename}
                </Typography>
              </div>
            ))}
            {handleError('files')}
          </FormGroup>
        </Grid>
      </Grid>
    </ModalBaseLayout>
  );
};

export default AttachmentModal;
//
