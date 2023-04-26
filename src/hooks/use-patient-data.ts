import { useState, useEffect } from 'react';
import { getPacientData } from '../services/pacient';

const usePatientData = () => {
  const [patientData, setPatientData] = useState<PatientType>({
    userId: '',
    name: '',
    birthdate: '',
    profession: '',
    schooling: '',
    demands: '',
    personalAnnotations: '',
  });

  useEffect(() => {
    const fetchPatientData = async () => {
      const {
        userId,
        name,
        birthdate,
        profession,
        schooling,
        demands,
        personalAnnotations,
      } = await getPacientData();
      setPatientData({
        userId,
        name,
        birthdate,
        profession,
        schooling,
        demands,
        personalAnnotations,
      });
    };

    fetchPatientData();
  }, []);

  return patientData;
};

export default usePatientData;
