import { useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ModalContext } from '../../contexts/ModalContext';
import ModalBaseLayout from '../modal-base-layout';
import useQuill from '../../hooks/use-quill';
import { MODULES } from '../../utils/constants';

const GoalsRequirementsModal = () => {
  const { modalsState } = useContext(ModalContext);
  const { onSubmit, handleSubmit, onEditorStateChange, editorContent } =
    useQuill('demands');

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
        modules={MODULES}
      />
    </ModalBaseLayout>
  );
};

export default GoalsRequirementsModal;
