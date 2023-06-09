import { useContext, useEffect, useState, ChangeEvent } from 'react';
import { useForm, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { ModalContext } from '../../contexts/ModalContext';
import {
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
  useTheme,
  TextField,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import ModalBaseLayout from '../modal-base-layout';
import Circle from '../circle';
import GroupLabelContainer from '../form-label-group-container';
import * as S from './styles';
import {
  postOccurrence,
  getOccurrences,
  editOccurrence,
} from '../../services/occurrence';
import { ServiceContext } from '../../contexts/ServiceContext';
import { OccurrencesContext } from '../../contexts/OccurrencesContext';
import { SubmitingContext } from '../../contexts/SubmitingContext';
import { EditingContext } from '../../contexts/EditingContext';
import formatDate from '../../utils/functions/format-date';
import { OccurrenceContext } from '../../contexts/OccurrenceContext';

type SessionFormType = {
  date: string;
  initialHour: string;
  finalHour: string;
  title: string;
  sessionResume: string;
  price: number;
  paymentMethod: string;
  paymentStatus: string;
};

const defaultValues: DefaultValues<SessionFormType> = {
  date: '',
  initialHour: '',
  finalHour: '',
  title: '',
  sessionResume: '',
  price: 0,
  paymentMethod: 'PIX',
  paymentStatus: 'Não pago',
};

const SessionModal = () => {
  const { modalsState } = useContext(ModalContext);

  const { service } = useContext(ServiceContext);

  const { setOccurrences } = useContext(OccurrencesContext);

  const { occurrence } = useContext(OccurrenceContext);

  const { setIsSubmiting } = useContext(SubmitingContext);

  const { isEditing } = useContext(EditingContext);

  const [paymentMethod, setPaymentMethod] = useState('PIX');

  const [paymentStatus, setPaymentStatus] = useState('PAGO');

  const theme = useTheme();

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<SessionFormType>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const resetForm = () => {
    reset(defaultValues);
    setPaymentMethod('PIX');
  };

  useEffect(() => {
    const setFormData = () => {
      setValue('title', occurrence.title);
      setValue('date', formatDate(occurrence.createdOn));
      occurrence.content && setValue('sessionResume', occurrence.content);
      if (occurrence.payment) {
        occurrence.payment.value && setValue('price', occurrence.payment.value);
        if (occurrence.payment.method) {
          setValue('paymentMethod', occurrence.payment.method);
          setPaymentMethod(occurrence.payment.method);
        }

        if (occurrence.payment.status) {
          setValue('paymentStatus', occurrence.payment.status);
          setPaymentStatus(occurrence.payment.status);
        }
      }
    };
    resetForm();
    if (isEditing) {
      setFormData();
    }
  }, [isEditing, occurrence]);

  const handlePaymentMethodSelectChange = async (
    event: SelectChangeEvent<unknown>
  ) => {
    const selectedValue = event.target.value as string;
    const eventObj = {
      target: {
        name: 'paymentMethod',
        value: selectedValue,
      },
      type: 'change',
    };
    await register('paymentMethod').onChange(eventObj);
    setPaymentMethod(selectedValue);
    setValue('paymentMethod', selectedValue);
  };

  const handlePaymentStatusChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = event.target.value as string;
    const eventObj = {
      target: {
        name: 'paymentStatus',
        value: selectedValue,
      },
      type: 'change',
    };
    await register('paymentStatus').onChange(eventObj);
    setPaymentStatus(selectedValue);
    setValue('paymentStatus', selectedValue);
  };

  const onSubmit = async (data: SessionFormType) => {
    setIsSubmiting(true);
    isEditing
      ? await editOccurrence(
          {
            title: data.title,
            content: data.sessionResume,
            payment: {
              value: data.price,
              method: data.paymentMethod,
              status: data.paymentStatus,
            },
          },
          occurrence._id
        )
      : await postOccurrence({
          type: 'session',
          timelineId: service._id,
          title: data.title,
          content: data.sessionResume,
          payment: {
            value: data.price,
            method: data.paymentMethod,
            status: data.paymentStatus,
          },
        });
    const occurrences = await getOccurrences(service._id);
    setOccurrences(occurrences);
    setIsSubmiting(false);
  };

  const handleError = (name: keyof Partial<SessionFormType>) => {
    return errors && errors[name] ? (
      <Typography variant="body2" color="error">
        {errors[name]?.message}
      </Typography>
    ) : null;
  };

  return (
    <ModalBaseLayout
      title={`${isEditing ? 'Editar' : 'Nova'} Sessão`}
      modalState={modalsState.isSessionModalOpen}
      modal="isSessionModalOpen"
      buttonTitle={isEditing ? 'Editar' : 'Criar'}
      isFieldsRequired={true}
      onSubmit={handleSubmit(onSubmit)}
      resetForm={resetForm}
    >
      <S.OutterBox>
        <GroupLabelContainer>
          <Circle>
            <Typography variant="h6">1</Typography>
          </Circle>
          <Typography variant="h6">Dados Gerais</Typography>
        </GroupLabelContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
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
          <Grid item xs={12} sm={4}>
            <FormGroup>
              <InputLabel htmlFor="initial-hour-input">
                <Typography variant="caption">Hora de início*</Typography>
              </InputLabel>
              <TextField
                id="initial-hour-input"
                {...register('initialHour')}
                error={Boolean(errors.initialHour)}
              />
              {handleError('initialHour')}
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormGroup>
              <InputLabel htmlFor="final-hour-input">
                <Typography variant="caption">Hora fim*</Typography>
              </InputLabel>
              <TextField
                id="final-hour-input"
                {...register('finalHour')}
                error={Boolean(errors.finalHour)}
              />
              {handleError('finalHour')}
            </FormGroup>
          </Grid>
        </Grid>
        <S.SessionDivider theme={theme} />
        <GroupLabelContainer>
          <Circle>
            <Typography variant="h6">2</Typography>
          </Circle>
          <Typography variant="h6">Sessão</Typography>
        </GroupLabelContainer>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormGroup>
              <InputLabel htmlFor="title-input">
                <Typography variant="caption">Título*</Typography>
              </InputLabel>
              <TextField
                id="title-input"
                {...register('title')}
                error={Boolean(errors.title)}
              />
              {handleError('title')}
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: '100%' }}>
              <FormGroup>
                <InputLabel htmlFor="session-resume-input">
                  <Typography variant="caption">Resumo da sessão*</Typography>
                </InputLabel>
                <TextField
                  id="session-resume-input"
                  multiline
                  rows={5}
                  placeholder="Text"
                  {...register('sessionResume')}
                  error={Boolean(errors.sessionResume)}
                />
                {handleError('sessionResume')}
              </FormGroup>
            </Box>
          </Grid>
        </Grid>
        <S.SessionDivider theme={theme} />
        <GroupLabelContainer>
          <Circle>
            <Typography variant="h6">3</Typography>
          </Circle>
          <Typography variant="h6">Pagamento</Typography>
        </GroupLabelContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormGroup>
              <InputLabel htmlFor="price-input">
                <Typography variant="caption">Valor</Typography>
              </InputLabel>
              <TextField
                id="price-input"
                type="number"
                {...register('price')}
                error={Boolean(errors.price)}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormGroup>
              <InputLabel htmlFor="payment-method-input">
                <Typography variant="caption">Forma de Pagamento</Typography>
              </InputLabel>
              <Select
                id="payment-method-input"
                value={paymentMethod}
                onChange={handlePaymentMethodSelectChange}
                error={!!errors.paymentMethod}
              >
                <MenuItem value="PIX">PIX</MenuItem>
                <MenuItem value="Cartão de crédito">Cartão de crédito</MenuItem>
              </Select>
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormGroup>
              <InputLabel htmlFor="payment-status-input">
                <Typography variant="caption">Status</Typography>
              </InputLabel>
              <RadioGroup
                id="payment-status-input"
                value={paymentStatus}
                onChange={handlePaymentStatusChange}
              >
                <FormControlLabel
                  value="Pago"
                  control={<Radio />}
                  label="Pago"
                />
                <FormControlLabel
                  value="Não pago"
                  control={<Radio />}
                  label="Não pago"
                />
              </RadioGroup>
            </FormGroup>
          </Grid>
        </Grid>
      </S.OutterBox>
    </ModalBaseLayout>
  );
};

export default SessionModal;
