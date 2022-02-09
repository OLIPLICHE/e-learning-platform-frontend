import axios from 'axios';

const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';

export const api = axios.create({
  baseURL: `${END_POINT}${API_ROUTE}`,
});

export const baseApi = axios.create({
  baseURL: `${END_POINT}`,
});

export const signup = async (user) => {
  const response = await baseApi.post('/users/signup', { user });
  const authToken = response.headers.authorization;
  const currentUser = response.data;

  return { authToken, currentUser };
};

export const login = async (user) => {
  const response = await baseApi.post('/users/login', { user });
  const authToken = response.headers.authorization;
  const currentUser = response.data;

  return { authToken, currentUser };
};

export const logout = async () => {
  await api.delete('/users/sign_out');
};

export const getCourses = async () => {
  const response = await api.get('/courses');
  return response.data;
};

export const getCourse = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};

export const createCourse = async (course) => {
  const response = await api.post('/courses/', course);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await api.delete(`/courses/${id}`);
  return response.data;
};

export const createEnrolment = async (enrolment) => {
  const response = await api.post('/enrolments/', enrolment);
  return response.data;
};

export const getEnrolments = async () => {
  const response = await api.get('/enrolments');
  return response.data;
};

export const getEnroloment = async (id) => {
  const response = await api.get(`/enrolments/${id}`);
  return response.data;
};

export const deleteEnrolment = async (id) => {
  const response = await api.delete(`/enrolments/${id}`);
  return response.data;
};
