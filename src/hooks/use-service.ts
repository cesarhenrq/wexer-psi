import { useState, useEffect } from 'react';
import { getServices } from '../services/service';

const useServices = () => {
  const [services, setServices] =
    useState<Pick<ServiceType, 'serviceName' | '_id'>>();
  useEffect(() => {
    const fetchServices = async () => {
      const services = await getServices();
      setServices(services);
    };

    fetchServices();
  }, []);

  return { services, setServices };
};

export default useServices;
