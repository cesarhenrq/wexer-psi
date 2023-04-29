import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import ReactQuill from 'react-quill';
import ModalBaseLayout from '../modal-base-layout';
import 'react-quill/dist/quill.snow.css';
import useQuill from '../../hooks/use-quill';
import { MODULES } from '../../utils/constants';

const PersonalNotesModal = () => {
  const { modalsState } = useContext(ModalContext);
  const { onSubmit, handleSubmit, onEditorStateChange, editorContent } =
    useQuill();

  return (
    <ModalBaseLayout
      title="Anotações Pessoais"
      modalState={modalsState.isPersonalNotesModalOpen}
      modal="isPersonalNotesModalOpen"
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

export default PersonalNotesModal;
