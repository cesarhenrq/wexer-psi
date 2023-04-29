import { useContext, useState, ChangeEvent } from 'react';
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
import { postOccurrence, getOccurrences } from '../../services/occurrence';
import ModalBaseLayout from '../modal-base-layout';
import * as S from './styles';
import { SubmitingContext } from '../../contexts/SubmitingContext';

type AttachmentModalFormType = {
  date: string;
  title: string;
  description: string;
};

const defaultValues: DefaultValues<AttachmentModalFormType> = {
  date: '',
  title: '',
  description: '',
};

const AttachmentModal = () => {
  const { modalsState } = useContext(ModalContext);

  const { service } = useContext(ServiceContext);

  const { setOccurrences } = useContext(OccurrencesContext);

  const { setIsSubmiting } = useContext(SubmitingContext);

  const [files, setFiles] = useState<{ name: string; size: number }[]>([]);

  const theme = useTheme();

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const fileList = Array.from(files).map((file) => ({
      name: file.name,
      size: file.size,
    }));
    setFiles(fileList);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<AttachmentModalFormType>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: AttachmentModalFormType) => {
    setIsSubmiting(true);
    await postOccurrence({
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
      title="Novo Anexo"
      modalState={modalsState.isAttachmentModalOpen}
      modal="isAttachmentModalOpen"
      buttonTitle="Criar"
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
              {files.map((file, index) => (
                <div style={{ flex: 1 }} key={index}>
                  <Typography color="secondary.dark" variant="subtitle1">
                    {file.name}
                  </Typography>
                </div>
              ))}
            </S.ButtonContainer>
          </FormGroup>
        </Grid>
      </Grid>
    </ModalBaseLayout>
  );
};

export default AttachmentModal;
//
