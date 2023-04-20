import { useContext, useState, ChangeEvent } from 'react';
import { useForm, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import {
  TextField,
  InputLabel,
  FormGroup,
  Grid,
  Box,
  Button,
  Typography,
} from '@mui/material';
import { ModalContext } from '../../contexts/ModalContext';
import ModalBaseLayout from '../modal-base-layout';
import { ButtonContainer } from './styles';
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

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    files ? setFileName(files[0].name) : setFileName('');
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

  const onSubmit = (data: AttachmentModalFormType) => {
    return data;
  };

  return (
    <ModalBaseLayout
      title="Novo Anexo"
      modalState={modalsState.isAttachmentModalOpen}
      modal="isAttachmentModalOpen"
      buttonTitle="Criar"
      isFieldsRequired={true}
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
          <Grid item xs={12}>
            <FormGroup>
              <InputLabel htmlFor="attachment-input">
                Anexar arquivos*
              </InputLabel>
              <ButtonContainer>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ textTransform: 'none', width: 'fit-content', mr: 2 }}
                >
                  Escolher arquivos...
                  <input
                    id="attachment-input"
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={handleFileUpload}
                  />
                </Button>
                <Typography color="secondary.dark">{fileName}</Typography>
              </ButtonContainer>
            </FormGroup>
          </Grid>
        </Grid>
      </form>
    </ModalBaseLayout>
  );
};

export default AttachmentModal;
