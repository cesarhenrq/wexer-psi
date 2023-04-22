import { ReactNode, useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Modal, IconButton, Button, useTheme } from '@mui/material';
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
          <S.TitleTypography variant="h5" color="primary.main">
            {title}
          </S.TitleTypography>
          <IconButton onClick={() => handleClose(modal)}>
            <CloseIcon />
          </IconButton>
        </S.TitleModalContainer>
        <div className="modal-content-container">{children}</div>
        <S.ModalFooterContainer>
          <S.RequiredTypography
            isFieldsRequired={isFieldsRequired}
            color="secondary.dark"
            variant="caption"
          >
            *Campos Obrigatórios
          </S.RequiredTypography>
          <div>
            <Button size="large" onClick={() => handleClose(modal)}>
              <S.CancelTypography color="secondary.dark">
                Cancelar
              </S.CancelTypography>
            </Button>
            <S.ActionButton theme={theme} size="large" variant="contained">
              <S.ActionButtonTypography color="secondary.main">
                {buttonTitle}
              </S.ActionButtonTypography>
            </S.ActionButton>
          </div>
        </S.ModalFooterContainer>
      </S.ModalBox>
    </Modal>
  );
};

export default ModalBaseLayout;
