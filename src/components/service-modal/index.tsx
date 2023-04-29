import { useContext, useEffect, useState } from 'react';
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
import { PatientDataContext } from '../../contexts/PatientDataContext';
import {
  createNewService,
  editService,
  getServices,
} from '../../services/service';
import { ServicesContext } from '../../contexts/ServicesContext';
import { EditingContext } from '../../contexts/EditingContext';
import { ServiceContext } from '../../contexts/ServiceContext';
import { getPacientData, updatePacientData } from '../../services/pacient';
import formatDate from '../../utils/functions/format-date';
import { SubmitingContext } from '../../contexts/SubmitingContext';

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

  const [serv, setServ] = useState('');

  const { services, setServices } = useContext(ServicesContext);

  const { service } = useContext(ServiceContext);

  const { isEditing } = useContext(EditingContext);

  const { setPatientData } = useContext(PatientDataContext);

  const {
    modalsState: { isServiceModalOpen },
    setModalsState,
  } = useContext(ModalContext);

  const {
    patientData: { name },
  } = useContext(PatientDataContext);

  const { setIsSubmiting } = useContext(SubmitingContext);

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ServiceModalFormType>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const handleServiceSelectChange = async (
    event: SelectChangeEvent<string>
  ) => {
    const selectedValue = event.target.value;
    await setValue('service', selectedValue);
    setServ(selectedValue);
  };

  const resetForm = () => {
    reset(defaultValues);
  };

  const handleClose = () => {
    setModalsState((prevValue) => ({
      ...prevValue,
      isServiceModalOpen: false,
    }));
    !isEditing && resetForm();
  };

  useEffect(() => {
    async function fetchData() {
      const selectedService = services.find((s) => s._id === service._id);
      if (isEditing === true && selectedService) {
        const { demands } = await getPacientData();
        await setValue('service', selectedService.serviceName);
        await setServ(selectedService.serviceName);
        await setValue('goals', demands);
        setValue('date', formatDate(selectedService.createdOn));
      } else {
        await setValue('service', '');
        await setServ('');
        await setValue('goals', '');
        setValue('date', '');
      }
    }

    fetchData();
  }, [isEditing, service._id, services]);

  const onSubmit = async (data: ServiceModalFormType) => {
    await setIsSubmiting(true);
    const selectedService = services.find((s) => s.serviceName === serv);
    if (isEditing === true && selectedService) {
      await editService(service._id, serv);
    } else {
      await createNewService(serv);
    }
    await updatePacientData('demands', data.goals);

    const updatedServices = await getServices();
    await setServices(updatedServices);

    const patientData = await getPacientData();
    await setPatientData(patientData);
    setIsSubmiting(false);
  };

  return (
    <Modal open={isServiceModalOpen} onClose={handleClose}>
      <S.ModalBox theme={theme}>
        <S.TitleModalContainer theme={theme}>
          <S.TitleTypography variant="h5" color="primary.main">
            {isEditing ? 'Editar serviço' : 'Novo serviço'}
          </S.TitleTypography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </S.TitleModalContainer>
        <Typography color="primary.main">Paciente</Typography>
        <Typography variant="h6" mb={2} color="secondary.dark">
          {name}
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
                  value={serv}
                  onChange={handleServiceSelectChange}
                  error={!!errors.service}
                >
                  <MenuItem value="" disabled>
                    Selecione uma opção
                  </MenuItem>
                  <MenuItem value="Porte de arma">Porte de arma</MenuItem>
                  <MenuItem value="Atestado">Atestado</MenuItem>
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
