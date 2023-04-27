import { createContext, Dispatch, SetStateAction } from 'react';

type DataPatientContextType = {
  patientData: PatientType;
  setPatientData: Dispatch<SetStateAction<PatientType>>;
};

export const PatientDataContext = createContext<DataPatientContextType>({
  patientData: {
    userId: '',
    name: '',
    birthdate: '',
    profession: '',
    schooling: '',
    demands: '',
    personalAnnotations: '',
  },
  setPatientData: () => null,
});
