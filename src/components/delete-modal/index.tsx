import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Modal, Box, Typography, Button, useTheme } from '@mui/material';
import * as S from './styles';

const buttonsStyle = {
  width: '215px',
  heigth: '48px',
  borderRadius: 5,
  color: 'secondary.main',
  textTransform: 'none',
  fontSize: '16px',
  fontWeigth: '700',
};

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
            <S.Buttons onClick={handleClose} theme={theme}>
              Voltar
            </S.Buttons>
            <Button sx={{ ...buttonsStyle, bgcolor: 'error.main' }}>
              Apagar
            </Button>
          </Box>
        </S.OutterBox>
      </Modal>
    </div>
  );
};

export default DeleteModal;
