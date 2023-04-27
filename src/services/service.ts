import { api } from './api';
import { PACIENT_ID } from '../utils/constants';
import getToken from '../utils/functions/get-token';

export const getServices = async (): Promise<ServiceType[]> => {
  try {
    const token = getToken();
    const result = await api.get(`/timeline/`, {
      headers: { Authorization: token },
    });

    const filteredResult = result.data.timelines.filter(
      (service: ServiceType) => service.patientId === PACIENT_ID
    );

    return filteredResult;
  } catch (error) {
    throw new Error('Failed to get services');
  }
};

export const createNewService = async (serviceName: string): Promise<void> => {
  try {
    const token = getToken();
    await api.post(
      '/timeline/',
      {
        serviceName,
        patientId: PACIENT_ID,
      },
      {
        headers: { Authorization: token },
      }
    );
  } catch (error) {
    throw new Error('Failed to create new service');
  }
};

export const deleteService = async (serviceId: string): Promise<void> => {
  try {
    const token = getToken();
    await api.delete(`/timeline/${serviceId}`, {
      headers: { Authorization: token },
    });
  } catch (error) {
    throw new Error('Failed to delete service');
  }
};
