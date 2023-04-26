import { api } from './api';
import { TOKEN_KEY } from '../utils/constants';

export const login = async (): Promise<string> => {
  try {
    const result = await api.post('/user/login', {
      email: 'cesarhenrique@gmail.com',
      password: '123456',
    });
    const { token } = result.data;
    localStorage.setItem(TOKEN_KEY, token);
    return token;
  } catch (error) {
    throw new Error('Failed to log in');
  }
};

export const getUserData = async (): Promise<UserType> => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) throw new Error('No token found');
    const result = await api.get('/user', {
      headers: { Authorization: token },
    });
    const { id, name, email } = result.data;
    return { id, name, email };
  } catch (error) {
    throw new Error('Failed to get user data');
  }
};
