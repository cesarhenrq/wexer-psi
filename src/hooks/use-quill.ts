import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

type UseQuillProps = {
  field: string;
};

const useQuill = ({ field }: UseQuillProps) => {
  const { register, handleSubmit, setValue, watch } = useForm<{
    [field: string]: string;
  }>();

  useEffect(() => {
    register(field, { required: true });
  }, [register, field]);

  const onEditorStateChange = (editorState: string) => {
    setValue(field, editorState);
  };

  const editorContent = watch(field);

  const onSubmit = (data: { [field: string]: string }) => {
    console.log(data);
  };

  return { onSubmit, handleSubmit, onEditorStateChange, editorContent };
};

export default useQuill;
