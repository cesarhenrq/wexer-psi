import { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ModalContext } from '../../contexts/ModalContext';
import ModalBaseLayout from '../modal-base-layout';

const GoalsRequirementsModal = () => {
  const { modalsState } = useContext(ModalContext);
  const [text, setText] = useState('');

  const handleTextChange = (content: string) => {
    setText(content);
  };

  return (
    <ModalBaseLayout
      title="Demandas e Objetivos"
      modalState={modalsState.isGoalsRequirementsModalOpen}
      modal="isGoalsRequirementsModalOpen"
      buttonTitle="Criar"
    >
      <ReactQuill value={text} onChange={handleTextChange} />
    </ModalBaseLayout>
  );
};

export default GoalsRequirementsModal;
