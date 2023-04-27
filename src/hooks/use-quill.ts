import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { updatePacientData } from '../services/pacient';
import { PatientDataContext } from '../contexts/PatientDataContext';

type FieldType = 'demands' | 'personalAnnotations' | 'observation';

const useQuill = (field: FieldType) => {
  const { register, handleSubmit, setValue, watch } = useForm<{
    [key in FieldType]: string;
  }>();

  const {
    patientData: { demands, personalAnnotations },
    setPatientData,
  } = useContext(PatientDataContext);

  useEffect(() => {
    switch (field) {
      case 'demands':
        setValue(field, demands);
        break;
      case 'personalAnnotations':
        setValue(field, personalAnnotations);
        break;
      default:
        break;
    }
    register(field, { required: true });
  }, [register, field, setValue, demands, personalAnnotations]);

  const onEditorStateChange = (editorState: string) => {
    setValue(field, editorState);
  };

  const editorContent = watch(field);

  const onSubmit = (data: { [key in FieldType]: string }) => {
    updatePacientData(field, data[field]);
    setPatientData((prevPatientData) => ({
      ...prevPatientData,
      [field]: data[field],
    }));
  };

  return { onSubmit, handleSubmit, onEditorStateChange, editorContent };
};

export default useQuill;
