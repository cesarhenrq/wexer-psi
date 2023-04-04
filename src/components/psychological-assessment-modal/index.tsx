import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import ModalBaseLayout from '../modal-base-layout';

const PsychologicalAssessmentModal = () => {
  const { modalsState } = useContext(ModalContext);
  return (
    <ModalBaseLayout
      title="Nova Avaliação Psicológica"
      modalState={modalsState.isPsychologicalAssessmentModalOpen}
      modal="isPsychologicalAssessmentModalOpen"
    >
      <p>Modal Sessão</p>
    </ModalBaseLayout>
  );
};

export default PsychologicalAssessmentModal;
