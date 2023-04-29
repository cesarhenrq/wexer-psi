import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { updatePacientData } from '../services/pacient';
import { PatientDataContext } from '../contexts/PatientDataContext';
import { SubmitingContext } from '../contexts/SubmitingContext';

const useQuill = () => {
  const { register, handleSubmit, setValue, watch } = useForm<{
    personalAnnotations: string;
  }>();

  const {
    patientData: { demands, personalAnnotations },
    setPatientData,
  } = useContext(PatientDataContext);

  const { setIsSubmiting } = useContext(SubmitingContext);

  useEffect(() => {
    setValue('personalAnnotations', personalAnnotations);

    register('personalAnnotations', { required: true });
  }, [register, setValue, demands, personalAnnotations]);

  const onEditorStateChange = (editorState: string) => {
    setValue('personalAnnotations', editorState);
  };

  const editorContent = watch('personalAnnotations');

  const onSubmit = (data: { personalAnnotations: string }) => {
    setIsSubmiting(true);
    updatePacientData('personalAnnotations', data.personalAnnotations);
    setPatientData((prevPatientData) => ({
      ...prevPatientData,
      personalAnnotations: data.personalAnnotations,
    }));
    setIsSubmiting(false);
  };

  return { onSubmit, handleSubmit, onEditorStateChange, editorContent };
};

export default useQuill;
