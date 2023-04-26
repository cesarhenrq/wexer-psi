import { api } from './api';
import { TOKEN_KEY, PACIENT_ID } from '../utils/constants';

export const getPacientData = async (): Promise<PatientType> => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) throw new Error('No token found');
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
