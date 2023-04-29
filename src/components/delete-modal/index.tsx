import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { Modal, useTheme } from '@mui/material';
import * as S from './styles';
import { ServicesContext } from '../../contexts/ServicesContext';
import { ServiceContext } from '../../contexts/ServiceContext';
import { deleteService, getServices } from '../../services/service';
import { SubmitingContext } from '../../contexts/SubmitingContext';

const DeleteModal = () => {
  const { modalsState, setModalsState } = useContext(ModalContext);

  const { setServices } = useContext(ServicesContext);

  const { service, setService } = useContext(ServiceContext);

  const { isSubmiting, setIsSubmiting } = useContext(SubmitingContext);

  const theme = useTheme();

  const handleClose = () =>
    setModalsState((prevValue) => ({ ...prevValue, isDeleteModalOpen: false }));

  const handleDelete = async () => {
    setIsSubmiting(true);
    await deleteService(service._id);
    const updatedServices = await getServices();
    setServices(updatedServices);
    setService({ serviceName: '', _id: '' });
    setIsSubmiting(false);
  };

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
          <S.Buttons
            theme={theme}
            variant="contained"
            color="error"
            onClick={handleDelete}
            disabled={isSubmiting}
          >
            Apagar
          </S.Buttons>
        </S.InnerBox>
      </S.OutterBox>
    </Modal>
  );
};

export default DeleteModal;
