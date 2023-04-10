import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 557,
  height: 444,
  bgcolor: 'background.paper',
  border: '2px solid secondary.dark',
  boxShadow: 24,
  borderRadius: 2,
  p: '0 32px 24px 32px',
  textAlign: 'center',
};

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

  const handleClose = () => {
    setModalsState((prevValue) => ({
      ...prevValue,
      isDeleteModalOpen: false,
    }));
  };

  return (
    <div>
      <Modal open={modalsState.isDeleteModalOpen} onClose={handleClose}>
        <Box sx={style}>
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
            <Button
              sx={{ ...buttonsStyle, bgcolor: 'primary.main' }}
              onClick={handleClose}
            >
              Voltar
            </Button>
            <Button sx={{ ...buttonsStyle, bgcolor: 'error.main' }}>
              Apagar
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteModal;
