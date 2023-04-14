import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import ModalBaseLayout from '../modal-base-layout';

const GoalsRequirementsModal = () => {
  const { modalsState } = useContext(ModalContext);
  return (
    <ModalBaseLayout
      title="Demandas e Objetivos"
      modalState={modalsState.isGoalsRequirementsModalOpen}
      modal="isGoalsRequirementsModalOpen"
      buttonTitle="Criar"
    >
      <p>Modal Objetivos e Demandas</p>
    </ModalBaseLayout>
  );
};

export default GoalsRequirementsModal;
