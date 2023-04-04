import { useContext } from 'react';
import { useForm, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { ModalContext } from '../../contexts/ModalContext';
import {
  TextField,
  InputLabel,
  FormGroup,
  Grid,
  Box,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@mui/material';
import ModalBaseLayout from '../modal-base-layout';
import Circle from '../circle';
import GroupLabelContainer from '../form-label-group-container';
import Divider from '@mui/material/Divider';

type SessionFormType = {
  date: string;
  initialHour: string;
  finalHour: string;
  title: string;
  sessionResume: string;
  price: string;
  paymentMethod: string;
  paymentStatus: string;
};

const defaultValues: DefaultValues<SessionFormType> = {
  date: '',
  initialHour: '',
  finalHour: '',
  title: '',
  sessionResume: '',
  price: '',
  paymentMethod: '',
  paymentStatus: '',
};

const SessionModal = () => {
  const { modalsState } = useContext(ModalContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SessionFormType>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });
  const onSubmit = (data: SessionFormType) => {
    return data;
  };

  return (
    <ModalBaseLayout
      title="Nova Sessão"
      modalState={modalsState.isSessionModalOpen}
      modal="isSessionModalOpen"
    >
      <Box sx={{ maxHeight: 'calc(100vh - 250px)', overflowY: 'scroll' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <GroupLabelContainer>
            <Circle>
              <Typography variant="h6">1</Typography>
            </Circle>
            <Typography variant="h6">Dados Gerais</Typography>
          </GroupLabelContainer>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <FormGroup>
                <InputLabel htmlFor="date-input">Data*</InputLabel>
                <TextField
                  id="date-input"
                  {...register('date')}
                  error={Boolean(errors.date)}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormGroup>
                <InputLabel htmlFor="initial-hour-input">
                  Hora de início*
                </InputLabel>
                <TextField
                  id="initial-hour-input"
                  {...register('initialHour')}
                  error={Boolean(errors.initialHour)}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormGroup>
                <InputLabel htmlFor="final-hour-input">Hora fim*</InputLabel>
                <TextField
                  id="final-hour-input"
                  {...register('finalHour')}
                  error={Boolean(errors.finalHour)}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 3 }} />
          <GroupLabelContainer>
            <Circle>
              <Typography variant="h6">2</Typography>
            </Circle>
            <Typography variant="h6">Sessão</Typography>
          </GroupLabelContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormGroup>
                <InputLabel htmlFor="title-input">Título*</InputLabel>
                <TextField
                  id="title-input"
                  {...register('title')}
                  error={Boolean(errors.title)}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ width: '100%' }}>
                <FormGroup>
                  <InputLabel htmlFor="session-resume-input">
                    Resumo da sessão*
                  </InputLabel>
                  <TextField
                    id="session-resume-input"
                    multiline
                    rows={5}
                    placeholder="Text"
                    {...register('sessionResume')}
                    error={Boolean(errors.sessionResume)}
                  />
                </FormGroup>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 3 }} />
          <GroupLabelContainer>
            <Circle>
              <Typography variant="h6">3</Typography>
            </Circle>
            <Typography variant="h6">Pagamento</Typography>
          </GroupLabelContainer>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <FormGroup>
                <InputLabel htmlFor="price-input">Valor</InputLabel>
                <TextField
                  id="price-input"
                  {...register('price')}
                  error={Boolean(errors.price)}
                />
              </FormGroup>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormGroup>
                <InputLabel htmlFor="payment-method-input">
                  Forma de pagamento
                </InputLabel>
                <Select
                  id="payment-method-input"
                  {...register('paymentMethod')}
                  error={Boolean(errors.paymentMethod)}
                >
                  <MenuItem value="pix">PIX</MenuItem>
                </Select>
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormGroup>
                <InputLabel htmlFor="payment-status-input">Status</InputLabel>
                <RadioGroup
                  row
                  id="payment-status-input"
                  {...register('paymentStatus')}
                >
                  <FormControlLabel
                    value="payed"
                    control={<Radio />}
                    label="Pago"
                  />
                  <FormControlLabel
                    value="notPayed"
                    control={<Radio />}
                    label="Não pago"
                  />
                </RadioGroup>
              </FormGroup>
            </Grid>
          </Grid>
        </form>
      </Box>
    </ModalBaseLayout>
  );
};

export default SessionModal;
