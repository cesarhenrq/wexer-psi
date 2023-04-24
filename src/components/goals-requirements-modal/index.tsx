import { useContext, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ModalContext } from '../../contexts/ModalContext';
import ModalBaseLayout from '../modal-base-layout';
import { useForm } from 'react-hook-form';

type GoalsRequirementsFormData = {
  goals: string;
};

const GoalsRequirementsModal = () => {
  const { modalsState } = useContext(ModalContext);
  const { register, handleSubmit, setValue, watch } =
    useForm<GoalsRequirementsFormData>();

  useEffect(() => {
    register('goals', { required: true });
  }, [register]);

  const onEditorStateChange = (editorState: string) => {
    setValue('goals', editorState);
  };

  const onSubmit = (data: GoalsRequirementsFormData) => {
    console.log(data);
  };

  const editorContent = watch('goals');

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
