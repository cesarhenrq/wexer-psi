import { useContext, useState } from 'react';
import {
  Modal,
  useTheme,
  IconButton,
  Typography,
  InputLabel,
  FormGroup,
  Grid,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import { ModalContext } from '../../contexts/ModalContext';
import * as S from './styles';
import CloseIcon from '../close-icon';
import { SelectChangeEvent } from '@mui/material/Select';
import { useForm, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';

type ServiceModalFormType = {
  date: string;
  service: string;
  goals: string;
};

const defaultValues: DefaultValues<ServiceModalFormType> = {
  date: '',
  service: '',
  goals: '',
};

const ServiceModal = () => {
  const theme = useTheme();

  const [service, setService] = useState('default');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ServiceModalFormType>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data: ServiceModalFormType) => {
    console.log(data);
  };

  const handleServiceSelectChange = async (
    event: SelectChangeEvent<unknown>
  ) => {
    const selectedValue = event.target.value as string;
    const eventObj = {
      target: {
        name: 'service',
        value: selectedValue,
      },
      type: 'change',
    };
    await register('service').onChange(eventObj);
    setService(selectedValue);
  };

  const {
    modalsState: { isServiceModalOpen },
    setModalsState,
  } = useContext(ModalContext);

  const handleClose = () => {
    setModalsState((prevValue) => ({
      ...prevValue,
      isServiceModalOpen: false,
    }));
  };

  return (
    <Modal open={isServiceModalOpen} onClose={handleClose}>
      <S.ModalBox theme={theme}>
        <S.TitleModalContainer theme={theme}>
          <S.TitleTypography variant="h5" color="primary.main">
            Novo serviço
          </S.TitleTypography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </S.TitleModalContainer>
        <Typography color="primary.main">Paciente</Typography>
        <Typography variant="h6" mb={2} color="secondary.dark">
          Ana Ester Resende
        </Typography>
        <Typography color="primary.main">CPF</Typography>
        <Typography variant="h6" mb={2} color="secondary.dark">
          114.559.886-78
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <FormGroup>
                <InputLabel htmlFor="date-input">
                  <Typography variant="caption">Data*</Typography>
                </InputLabel>
                <TextField
                  id="date-input"
                  placeholder="14/06/2021"
                  {...register('date')}
                  error={!!errors.date}
                />
              </FormGroup>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormGroup>
                <InputLabel htmlFor="service-input">
                  <Typography variant="caption">Serviço*</Typography>
                </InputLabel>
                <Select
                  value={service}
                  onChange={handleServiceSelectChange}
                  error={!!errors.service}
                >
                  <MenuItem value="default" disabled>
                    Selecione uma opção
                  </MenuItem>
                  <MenuItem value="carrying-weapon">Porte de arma</MenuItem>
                </Select>
              </FormGroup>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormGroup>
                <InputLabel htmlFor="goals-input">
                  <Typography variant="caption">
                    Demandas e objetivos*
                  </Typography>
                </InputLabel>
                <TextField
                  id="goals-input"
                  multiline
                  rows={5}
                  placeholder="Text"
                  {...register('goals')}
                  error={!!errors.goals}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={12}>
              <S.SaveButton variant="contained" theme={theme} type="submit">
                <S.TitleTypography>Salvar</S.TitleTypography>
              </S.SaveButton>
            </Grid>
          </Grid>
        </form>
      </S.ModalBox>
    </Modal>
  );
};

export default ServiceModal;
