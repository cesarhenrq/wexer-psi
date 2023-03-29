import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TitleModal from '../title-modal';
import ModalFooter from '../modal-footer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 674,
  bgcolor: 'background.paper',
  border: '2px solid secondary.dark',
  boxShadow: 24,
  borderRadius: 2,
  p: '24px 32px 0 32px',
};

const SessionModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="session-modal-title"
      >
        <Box sx={style}>
          <TitleModal title="Nova Sessão" />
          <ModalFooter />
        </Box>
      </Modal>
    </div>
  );
};

export default SessionModal;
