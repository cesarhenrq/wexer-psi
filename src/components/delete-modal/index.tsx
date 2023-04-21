import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Modal, useTheme } from '@mui/material';
import * as S from './styles';

const DeleteModal = () => {
  const { modalsState, setModalsState } = useContext(ModalContext);
  const theme = useTheme();

  const handleClose = () =>
    setModalsState((prevValue) => ({ ...prevValue, isDeleteModalOpen: false }));

  return (
    <Modal open={modalsState.isDeleteModalOpen} onClose={handleClose}>
      <S.OutterBox theme={theme}>
        <S.TitleTypography variant="h4" color="primary.main" theme={theme}>
          Tem certeza que deseja excluir esse serviço?
        </S.TitleTypography>
        <S.InnerBox theme={theme}>
          <S.Buttons
            onClick={handleClose}
            theme={theme}
            color="info"
            variant="contained"
          >
            Voltar
          </S.Buttons>
          <S.Buttons theme={theme} variant="contained" color="error">
            Apagar
          </S.Buttons>
        </S.InnerBox>
      </S.OutterBox>
    </Modal>
  );
};

export default DeleteModal;
