import { useContext, useEffect } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Box, Typography, MenuItem, useTheme, Button } from '@mui/material';
import * as S from './styles';
import DeleteButton from '../delete-button';
import SessionIcon from '../session-icon';
import PinIcon from '../pin-icon';
import ClipIcon from '../clip-icon';
import ClipboardIcon from '../clipboard-icon';
import EditButton from '../edit-button';
import { SelectChangeEvent } from '@mui/material/Select';
import { ServicesContext } from '../../contexts/ServicesContext';
import { ServiceContext } from '../../contexts/ServiceContext';
import { OccurrencesContext } from '../../contexts/OccurrencesContext';
import { getOccurrences } from '../../services/occurrence';
import { EditingContext } from '../../contexts/EditingContext';

const ModalToolBar = () => {
  const theme = useTheme();

  const { setModalsState } = useContext(ModalContext);

  const { services } = useContext(ServicesContext);

  const { service, setService } = useContext(ServiceContext);

  const { setOccurrences } = useContext(OccurrencesContext);

  const { isEditing, setIsEditing } = useContext(EditingContext);

  useEffect(() => {
    if (service.serviceName !== '') {
      setIsEditing(true);
    }
  }, [service.serviceName, isEditing]);

  const handleClick = async <Keys extends ModalsStateKeys>(key: Keys) => {
    setModalsState((prevValue) => ({
      ...prevValue,
      [key]: true,
    }));
  };

  const handleServiceSelectChange = async (
    event: SelectChangeEvent<unknown>
  ) => {
    const selectedValue = event.target.value as string;
    if (selectedValue === 'new-service') {
      handleClick('isServiceModalOpen');
      await setService({ serviceName: '', _id: '' });
      setIsEditing(false);
    }
  };

  const handleOccurrences = async (serviceName: string, _id: string) => {
    await setService({ serviceName, _id });
    const occurrences = await getOccurrences(_id);
    setOccurrences(occurrences);
  };

  const toggleButton = () => (service.serviceName === '' ? true : false);

  return (
    <S.OutterBox theme={theme}>
      <S.InnerBox>
        <S.ServiceFormControl theme={theme}>
          <S.ServiceTypography theme={theme}>Serviço:</S.ServiceTypography>
          <S.ServiceSelect
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            value={service.serviceName}
            onChange={handleServiceSelectChange}
          >
            <MenuItem value={'new-service'}>Novo Serviço</MenuItem>
            {services.map(({ serviceName, _id }, index) => (
              <MenuItem
                value={serviceName}
                key={index}
                onClick={() => handleOccurrences(serviceName, _id)}
              >
                {serviceName}
              </MenuItem>
            ))}
          </S.ServiceSelect>
        </S.ServiceFormControl>
        <Typography>
          <b>Data inicial:</b> 18/10/2022
        </Typography>
        <S.ButtonContainer theme={theme}>
          <EditButton modal="isServiceModalOpen" isDisabled={toggleButton()} />
          <DeleteButton isDisabled={toggleButton()} />
        </S.ButtonContainer>
      </S.InnerBox>
      <S.ToolBarDivider theme={theme} />
      <Box>
        <S.ToolBarStack direction="row" spacing={2}>
          <Button
            variant="text"
            startIcon={<SessionIcon filled={true} />}
            onClick={() => handleClick('isSessionModalOpen')}
            disabled={toggleButton()}
          >
            <S.ActionButtonTypography color="secondary.dark">
              Sessão
            </S.ActionButtonTypography>
          </Button>
          <Button
            variant="text"
            startIcon={<PinIcon filled={true} />}
            onClick={() => handleClick('isPertinentFactModalOpen')}
            disabled={toggleButton()}
          >
            <S.ActionButtonTypography color="secondary.dark">
              Fato importante
            </S.ActionButtonTypography>
          </Button>
          <Button
            variant="text"
            startIcon={<ClipIcon filled={true} />}
            onClick={() => handleClick('isAttachmentModalOpen')}
            disabled={toggleButton()}
          >
            <S.ActionButtonTypography color="secondary.dark">
              Anexo
            </S.ActionButtonTypography>
          </Button>
          <Button
            variant="text"
            startIcon={
              <ClipboardIcon color="#EA1E61" width="24" height="29.33" />
            }
            onClick={() => handleClick('isPsychologicalAssessmentModalOpen')}
            disabled={toggleButton()}
          >
            <S.ActionButtonTypography color="secondary.dark">
              Avaliação Psicológica
            </S.ActionButtonTypography>
          </Button>
        </S.ToolBarStack>
      </Box>
    </S.OutterBox>
  );
};

export default ModalToolBar;
