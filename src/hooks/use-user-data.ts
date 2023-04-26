import { useState, useEffect } from 'react';
import { getUserData } from '../services/user';

const useUserData = () => {
  const [userData, setUserData] = useState<UserType>({
    id: '',
    name: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const { id, name, email } = await getUserData();
      setUserData({ id, name, email });
    };

    fetchUserData();
  }, []);

  return userData;
};

export default useUserData;
