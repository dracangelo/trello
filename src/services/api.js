import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createBoard = async (data) => {
  const response = await API.post('/boards/create', data);
  return response.data;
};

export const getBoards = async () => {
  const response = await API.get('/boards');
  return response.data;
};

export const deleteBoard = async (id) => {
  const response = await API.delete(`/boards/${id}`);
  return response.data;
};

export const createList = async (data) => {
  const response = await API.post('/lists/create', data);
  return response.data;
};

export const createCard = async (data) => {
  const response = await API.post('/cards/create', data);
  return response.data;
};
