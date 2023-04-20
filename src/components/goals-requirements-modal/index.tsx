import { useContext, useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ModalBaseLayout from '../modal-base-layout';

const GoalsRequirementsModal = () => {
  const { modalsState } = useContext(ModalContext);
  const [text, setText] = useState('');
  return (
    <ModalBaseLayout
      title="Demandas e Objetivos"
      modalState={modalsState.isGoalsRequirementsModalOpen}
      modal="isGoalsRequirementsModalOpen"
      buttonTitle="Criar"
    >
      <ReactQuill value={text} onChange={(content) => setText(content)} />
    </ModalBaseLayout>
  );
};

export default GoalsRequirementsModal;
