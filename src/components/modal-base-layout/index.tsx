import { ReactNode, useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Modal, Box, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '../close-icon';
import * as S from './styles';

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

type ModalBaseLayoutProps = {
  title: string;
  children: ReactNode;
  modalState: boolean;
  modal: ModalsStateKeys;
  buttonTitle: 'Criar' | 'Prosseguir';
};

const ModalBaseLayout = ({
  title,
  children,
  modalState,
  modal,
  buttonTitle,
}: ModalBaseLayoutProps) => {
  const { setModalsState } = useContext(ModalContext);

  const handleClose = <Keys extends ModalsStateKeys>(key: Keys) => {
    setModalsState((prevValue) => ({
      ...prevValue,
      [key]: false,
    }));
  };

  return (
    <div>
      <Modal open={modalState} onClose={() => handleClose(`${modal}`)}>
        <Box sx={style}>
          <S.TitleModalContainer>
            <Typography
              variant="h5"
              color="primary.main"
              sx={{ fontWeight: 'bold' }}
            >
              {title}
            </Typography>
            <IconButton onClick={() => handleClose(`${modal}`)}>
              <CloseIcon />
            </IconButton>
          </S.TitleModalContainer>
          <div className="modal-content-container">{children}</div>
          <S.ModalFooterContainer>
            <Typography
              color="secondary.dark"
              sx={{
                fontStyle: 'italic',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              *Campos Obrigatórios
            </Typography>

            <div>
              <Button size="large" onClick={() => handleClose(`${modal}`)}>
                <Typography
                  color="secondary.dark"
                  sx={{ textTransform: 'none' }}
                >
                  Cancelar
                </Typography>
              </Button>
              <Button
                size="large"
                variant="contained"
                sx={{ borderRadius: 8, width: 147 }}
              >
                <Typography
                  color="secondary.main"
                  sx={{ textTransform: 'none', fontWeight: '700' }}
                >
                  {buttonTitle}
                </Typography>
              </Button>
            </div>
          </S.ModalFooterContainer>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalBaseLayout;
