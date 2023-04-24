import { useContext, useState} from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import ReactQuill from 'react-quill';
import ModalBaseLayout from '../modal-base-layout';

const PersonalNotesModal = () => {
  const { modalsState } = useContext(ModalContext);
  const [text, setText] = useState('');

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
      title="Anotações Pessoais"
      modalState={modalsState.isPersonalNotesModalOpen}
      modal="isPersonalNotesModalOpen"
      buttonTitle="Criar"
    >
      <ReactQuill value={text} onChange={setText} modules={modules} />
    </ModalBaseLayout>
  );
};

export default PersonalNotesModal;
