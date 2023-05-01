import { ReactNode, useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Modal, IconButton, Button, useTheme } from '@mui/material';
import CloseIcon from '../close-icon';
import * as S from './styles';
import { SubmitingContext } from '../../contexts/SubmitingContext';
import { EditingContext } from '../../contexts/EditingContext';

type ModalBaseLayoutProps = {
  title: string;
  children: ReactNode;
  modalState: boolean;
  modal: ModalsStateKeys;
  buttonTitle: 'Criar' | 'Prosseguir' | 'Editar';
  isFieldsRequired?: boolean;
  onSubmit?: (data: any) => void;
  resetForm?: () => void;
};

const ModalBaseLayout = ({
  title,
  children,
  modalState,
  modal,
  buttonTitle,
  isFieldsRequired,
  onSubmit,
  resetForm,
}: ModalBaseLayoutProps) => {
  const { setModalsState } = useContext(ModalContext);

  const { isSubmiting } = useContext(SubmitingContext);

  const { isEditing, setIsEditing } = useContext(EditingContext);

  const theme = useTheme();

  const handleClose = (key: ModalsStateKeys) => {
    setModalsState((prevValue) => ({
      ...prevValue,
      [key]: false,
    }));
    isEditing ? setIsEditing(false) : setIsEditing(true);
    resetForm && resetForm();
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
        <form onSubmit={onSubmit}>
          <div className="modal-content-container">
            {children}
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
                <S.ActionButton
                  theme={theme}
                  size="large"
                  variant="contained"
                  type="submit"
                  disabled={isSubmiting}
                >
                  <S.ActionButtonTypography color="secondary.main">
                    {buttonTitle}
                  </S.ActionButtonTypography>
                </S.ActionButton>
              </div>
            </S.ModalFooterContainer>
          </div>
        </form>
      </S.ModalBox>
    </Modal>
  );
};

export default ModalBaseLayout;
