import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import ReactQuill from 'react-quill';
import ModalBaseLayout from '../modal-base-layout';
import 'react-quill/dist/quill.snow.css';
import useQuill from '../../hooks/use-quill';

const PersonalNotesModal = () => {
  const { modalsState } = useContext(ModalContext);
  const { onSubmit, handleSubmit, onEditorStateChange, editorContent } =
    useQuill({ field: 'personalNotes' });

  const formats = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ script: 'sub' }, { script: 'super' }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    ['align', { align: 'center' }, { align: 'right' }, { align: 'justify' }],
    ['link'],
  ];

  const modules = {
    toolbar: {
      container: formats,
    },
  };

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
        modules={modules}
      />
    </ModalBaseLayout>
  );
};

export default PersonalNotesModal;
