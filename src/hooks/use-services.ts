import { useState, useEffect } from 'react';
import { getServices } from '../services/service';

const useServices = () => {
  const [services, setServices] = useState<ServiceType[]>([]);
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
