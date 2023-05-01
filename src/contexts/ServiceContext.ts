import { createContext, Dispatch, SetStateAction } from 'react';

type ServiceContextType = {
  service: Pick<ServiceType, 'serviceName' | '_id'>;
  setService: Dispatch<
    SetStateAction<Pick<ServiceType, 'serviceName' | '_id'>>
  >;
};

export const ServiceContext = createContext<ServiceContextType>({
  service: { serviceName: '', _id: '' },
  setService: () => null,
});
