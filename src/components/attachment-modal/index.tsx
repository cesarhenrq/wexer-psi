import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import ModalBaseLayout from '../modal-base-layout';

const AttachmentModal = () => {
  const { modalsState } = useContext(ModalContext);
  return (
    <ModalBaseLayout
      title="Novo Anexo"
      modalState={modalsState.isAttachmentModalOpen}
      modal="isAttachmentModalOpen"
    >
      <p>Modal Sessão</p>
    </ModalBaseLayout>
  );
};

export default AttachmentModal;
