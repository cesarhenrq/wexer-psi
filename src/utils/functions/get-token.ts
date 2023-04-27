import { TOKEN_KEY } from '../constants';

const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) {
    throw new Error('No token found');
  }
  return token;
};

export default getToken;
