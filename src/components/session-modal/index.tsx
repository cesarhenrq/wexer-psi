import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
  p: 4,
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
          <Typography
            id="session-modal-title"
            variant="h5"
            color="primary.main"
            sx={{ fontWeight: 'bold' }}
          >
            Nova Sessão
          </Typography>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: 'primary.main',
              textAlign: 'center',
            }}
          >
            1
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SessionModal;
