import { api } from './api';
import { PACIENT_ID } from '../utils/constants';
import getToken from '../utils/functions/get-token';

type FieldType = 'demands' | 'personalAnnotations' | 'observation';

export const getPacientData = async (): Promise<PatientType> => {
  try {
    const token = getToken();
    const result = await api.get(`/patient/${PACIENT_ID}`, {
      headers: { Authorization: token },
    });
    const {
      userId,
      name,
      birthdate,
      profession,
      schooling,
      demands,
      personalAnnotations,
    } = result.data;

    return {
      userId,
      name,
      birthdate,
      profession,
      schooling,
      demands,
      personalAnnotations,
    };
  } catch (error) {
    throw new Error('Failed to get user data');
  }
};

export const updatePacientData = async (
  field: FieldType,
  updatedField: string
): Promise<void> => {
  try {
    const token = getToken();
    await api.put(
      `/patient/${PACIENT_ID}`,
      { [field]: updatedField },
      {
        headers: { Authorization: token },
      }
    );
  } catch (error) {
    throw new Error('Failed to update patient data');
  }
};
