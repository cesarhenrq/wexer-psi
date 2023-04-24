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

  const formats = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ script: 'sub' }, { script: 'super' }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [
      { align: 'left' },
      { align: 'center' },
      { align: 'right' },
      { align: 'justify' },
    ],
    ['align'],
    ['link'],
  ];

  const modules = {
    toolbar: {
      container: formats,
    },
  };

  return (
    <ModalBaseLayout
      title="Demandas e Objetivos"
      modalState={modalsState.isGoalsRequirementsModalOpen}
      modal="isGoalsRequirementsModalOpen"
      buttonTitle="Criar"
    >
      <ReactQuill value={text} onChange={handleTextChange} modules={modules} />
    </ModalBaseLayout>
  );
};

export default GoalsRequirementsModal;
