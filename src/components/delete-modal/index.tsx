import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Modal, Box, Typography, useTheme } from '@mui/material';
import * as S from './styles';

const DeleteModal = () => {
  const { modalsState, setModalsState } = useContext(ModalContext);

  const theme = useTheme();

  const handleClose = () => {
    setModalsState((prevValue) => ({
      ...prevValue,
      isDeleteModalOpen: false,
    }));
  };

  return (
    <div>
      <Modal open={modalsState.isDeleteModalOpen} onClose={handleClose}>
        <S.OutterBox theme={theme}>
          <Typography
            variant="h4"
            color="primary.main"
            sx={{ ml: 6, mr: 6, mb: 3, mt: '50%' }}
          >
            Tem certeza que deseja excluir esse serviço?
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              ml: 7,
              mr: 7,
            }}
          >
            <S.Buttons onClick={handleClose} theme={theme} variant="contained">
              Voltar
            </S.Buttons>
            <S.Buttons theme={theme} variant="contained" color="error">
              Apagar
            </S.Buttons>
          </Box>
        </S.OutterBox>
      </Modal>
    </div>
  );
};

export default DeleteModal;
