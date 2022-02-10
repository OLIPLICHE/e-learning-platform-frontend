import axios from 'axios';

const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';

export const api = axios.create({
  baseURL: `${END_POINT}${API_ROUTE}`,

  headers: {
    Authorization: `${localStorage.getItem('token')}`,
  },
});
export const baseApi = axios.create({
  baseURL: `${END_POINT}`,
});

export const signup = async (user) => {
  const response = await baseApi.post('/users/signup', { user });
  const authToken = response.headers.authorization;
  const currentUser = response.data;
  localStorage.setItem('token', authToken);
  return { authToken, currentUser };
};
export const login = async (user) => {
  const response = await baseApi.post('/users/login', { user });
  const authToken = response.headers.authorization;
  const currentUser = response.data;
  localStorage.setItem('token', authToken);
  return { authToken, currentUser };
};

export const logout = async () => {
  const token = localStorage.getItem('token');
  await baseApi.delete('/users/logout', {
    headers: {
      Authorization: `${token}`,
    },
  });
};