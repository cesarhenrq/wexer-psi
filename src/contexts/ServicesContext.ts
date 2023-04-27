import { createContext, Dispatch, SetStateAction } from 'react';

type ServicesContextType = {
  services: ServiceType[];
  setServices: Dispatch<SetStateAction<ServiceType[]>>;
};

export const ServicesContext = createContext<ServicesContextType>({
  services: [],
  setServices: () => null,
});
