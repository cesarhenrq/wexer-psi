import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import ModalBaseLayout from '../modal-base-layout';

const PersonalNotesModal = () => {
  const { modalsState } = useContext(ModalContext);
  return (
    <ModalBaseLayout
      title="Anotações Pessoais"
      modalState={modalsState.isPersonalNotesModalOpen}
      modal="isPersonalNotesModalOpen"
    >
      <p>Modal Objetivos e Demandas</p>
    </ModalBaseLayout>
  );
};

export default PersonalNotesModal;
