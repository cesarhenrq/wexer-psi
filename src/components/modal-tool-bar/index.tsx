import { useContext, useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Box, Typography, MenuItem, useTheme } from '@mui/material';
import * as S from './styles';
import DeleteButton from '../delete-button';
import SessionIcon from '../session-icon';
import PinIcon from '../pin-icon';
import ClipIcon from '../clip-icon';
import ClipboardIcon from '../clipboard-icon';
import EditButton from '../edit-button';
import { SelectChangeEvent } from '@mui/material/Select';

const ModalToolBar = () => {
  const { setModalsState } = useContext(ModalContext);

  const [service, setService] = useState('');

  const theme = useTheme();

  const handleClick = <Keys extends ModalsStateKeys>(key: Keys) => {
    setModalsState((prevValue) => ({
      ...prevValue,
      [key]: true,
    }));
  };

  const handleServiceSelectChange = (event: SelectChangeEvent<unknown>) => {
    const selectedValue = event.target.value as string;
    if (selectedValue === 'new-service') {
      setService(selectedValue);
      handleClick('isServiceModalOpen');
    }
  };

  return (
    <S.OutterBox theme={theme}>
      <S.InnerBox>
        <S.ServiceFormControl theme={theme}>
          <S.ServiceTypography theme={theme}>Serviço:</S.ServiceTypography>
          <S.ServiceSelect
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            value={service}
            onChange={handleServiceSelectChange}
          >
            <MenuItem value="new-service">Novo Serviço</MenuItem>
          </S.ServiceSelect>
        </S.ServiceFormControl>
        <Typography>
          <b>Data inicial:</b> 18/10/2022
        </Typography>
        <S.ButtonContainer theme={theme}>
          <EditButton modal="isSessionModalOpen" />
          <DeleteButton />
        </S.ButtonContainer>
      </S.InnerBox>
      <S.ToolBarDivider theme={theme} />
      <Box>
        <S.ToolBarStack direction="row" spacing={2}>
          <S.ActionButton
            variant="text"
            startIcon={<SessionIcon filled={true} />}
            onClick={() => handleClick('isSessionModalOpen')}
          >
            <S.ActionButtonTypography color="secondary.dark">
              Sessão
            </S.ActionButtonTypography>
          </S.ActionButton>
          <S.ActionButton
            variant="text"
            startIcon={<PinIcon filled={true} />}
            onClick={() => handleClick('isPertinentFactModalOpen')}
          >
            <S.ActionButtonTypography color="secondary.dark">
              Fato importante
            </S.ActionButtonTypography>
          </S.ActionButton>
          <S.ActionButton
            variant="text"
            startIcon={<ClipIcon filled={true} />}
            onClick={() => handleClick('isAttachmentModalOpen')}
          >
            <S.ActionButtonTypography color="secondary.dark">
              Anexo
            </S.ActionButtonTypography>
          </S.ActionButton>
          <S.ActionButton
            variant="text"
            startIcon={
              <ClipboardIcon color="#EA1E61" width="24" height="29.33" />
            }
            onClick={() => handleClick('isPsychologicalAssessmentModalOpen')}
          >
            <S.ActionButtonTypography color="secondary.dark">
              Avaliação Psicológica
            </S.ActionButtonTypography>
          </S.ActionButton>
        </S.ToolBarStack>
      </Box>
    </S.OutterBox>
  );
};

export default ModalToolBar;
