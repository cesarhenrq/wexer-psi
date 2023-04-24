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
import ModalBaseLayout from '../modal-base-layout';
import * as S from './styles';

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

  const [fileName, setFileName] = useState('');

  const theme = useTheme();

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setFileName(files ? files[0].name : '');
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AttachmentModalFormType>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data: AttachmentModalFormType) => data;

  return (
    <ModalBaseLayout
      title="Novo Anexo"
      modalState={modalsState.isAttachmentModalOpen}
      modal="isAttachmentModalOpen"
      buttonTitle="Criar"
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
              placeholder="14/06/2021"
              id="date-input"
              {...register('date')}
              error={!!errors.date}
            />
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
            </FormGroup>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <InputLabel htmlFor="attachment-input">
              <Typography variant="caption">Anexar arquivos*</Typography>
            </InputLabel>
            <S.ButtonContainer>
              <S.InputFileButton variant="contained" theme={theme}>
                <input
                  id="attachment-input"
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={handleFileUpload}
                />
                <Typography variant="subtitle1">
                  Escolher arquivos...
                </Typography>
              </S.InputFileButton>
              <Typography color="secondary.dark" variant="subtitle1">
                {fileName}
              </Typography>
            </S.ButtonContainer>
          </FormGroup>
        </Grid>
      </Grid>
    </ModalBaseLayout>
  );
};

export default AttachmentModal;
