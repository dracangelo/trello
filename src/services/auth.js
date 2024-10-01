import axios from 'axios';

export const login = async (credentials) => {
  const response = await axios.post('/api/auth/login', credentials);
  return response.data;
};

export const register = async (credentials) => {
  const response = await axios.post('/api/auth/register', credentials);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = () => {
  return localStorage.getItem('token');
};
