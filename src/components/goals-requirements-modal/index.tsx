import { useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ModalContext } from '../../contexts/ModalContext';
import ModalBaseLayout from '../modal-base-layout';
import useQuill from '../../hooks/use-quill';

const GoalsRequirementsModal = () => {
  const { modalsState } = useContext(ModalContext);
  const { onSubmit, handleSubmit, onEditorStateChange, editorContent } =
    useQuill({ field: 'goals' });

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
      onSubmit={handleSubmit(onSubmit)}
    >
      <ReactQuill
        theme="snow"
        value={editorContent}
        onChange={onEditorStateChange}
        modules={modules}
      />
    </ModalBaseLayout>
  );
};

export default GoalsRequirementsModal;
