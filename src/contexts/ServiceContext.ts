import { createContext, Dispatch, SetStateAction } from 'react';

type ServiceContextType = {
  service: Pick<ServiceType, 'serviceName' | '_id' | 'createdOn'>;
  setService: Dispatch<
    SetStateAction<Pick<ServiceType, 'serviceName' | '_id' | 'createdOn'>>
  >;
};

export const ServiceContext = createContext<ServiceContextType>({
  service: { serviceName: '', _id: '', createdOn: '' },
  setService: () => null,
});
