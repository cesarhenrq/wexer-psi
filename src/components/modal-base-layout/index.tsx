import { ReactNode, useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Modal, Typography, IconButton, Button, useTheme } from '@mui/material';
import CloseIcon from '../close-icon';
import * as S from './styles';

type ModalBaseLayoutProps = {
  title: string;
  children: ReactNode;
  modalState: boolean;
  modal: ModalsStateKeys;
  buttonTitle: 'Criar' | 'Prosseguir';
  isFieldsRequired?: boolean;
};

const ModalBaseLayout = ({
  title,
  children,
  modalState,
  modal,
  buttonTitle,
  isFieldsRequired,
}: ModalBaseLayoutProps) => {
  const { setModalsState } = useContext(ModalContext);

  const theme = useTheme();

  const handleClose = (key: ModalsStateKeys) => {
    setModalsState((prevValue) => ({
      ...prevValue,
      [key]: false,
    }));
  };

  return (
    <Modal open={modalState} onClose={() => handleClose(modal)}>
      <S.ModalBox theme={theme}>
        <S.TitleModalContainer>
          <Typography
            variant="h5"
            color="primary.main"
            sx={{ fontWeight: 'bold' }}
          >
            {title}
          </Typography>
          <IconButton onClick={() => handleClose(modal)}>
            <CloseIcon />
          </IconButton>
        </S.TitleModalContainer>
        <div className="modal-content-container">{children}</div>
        <S.ModalFooterContainer>
          <Typography
            color="secondary.dark"
            sx={{
              display: 'flex',
              fontStyle: 'italic',
              alignItems: 'center',
              visibility: isFieldsRequired ? 'visible' : 'hidden',
            }}
          >
            *Campos Obrigatórios
          </Typography>

          <div>
            <Button size="large" onClick={() => handleClose(modal)}>
              <Typography color="secondary.dark" sx={{ textTransform: 'none' }}>
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
      </S.ModalBox>
    </Modal>
  );
};

export default ModalBaseLayout;
