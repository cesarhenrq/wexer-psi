import { api } from './api';
import getToken from '../utils/functions/get-token';

export const getOccurrences = async (
  serviceId: string
): Promise<OccurrenceType[]> => {
  try {
    const token = getToken();
    const result = await api.get(`/timeline/${serviceId}`, {
      headers: { Authorization: token },
    });
    const {
      timeline: { occurrences },
    } = result.data;
    return occurrences;
  } catch (error) {
    throw new Error('Failed to get occurrences');
  }
};

export const postOccurrence = async (data: DataType): Promise<void> => {
  try {
    const token = getToken();
    await api.post(`/occurrence/`, data, {
      headers: { Authorization: token },
    });
  } catch (error) {
    throw new Error('Failed to post occurrence');
  }
};

export const deleteOccurrence = async (
  serviceId: string,
  occurrenceId: string
): Promise<void> => {
  try {
    const token = getToken();
    await api.delete(`/timeline/${serviceId}/occurrence/${occurrenceId}`, {
      headers: { Authorization: token },
    });
  } catch (error) {
    throw new Error('Failed to delete occurrence');
  }
};

export const editOccurrence = async (
  data: DataType,
  occurrenceId: string
): Promise<void> => {
  try {
    const token = getToken();
    await api.put(`/occurrence/${occurrenceId}`, data, {
      headers: { Authorization: token },
    });
  } catch (error) {
    throw new Error('Failed to edit occurrence');
  }
};
