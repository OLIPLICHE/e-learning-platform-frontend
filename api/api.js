import axios from 'axios';

const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';

export const api = axios.create({
  baseURL: `${END_POINT}${API_ROUTE}`,
});
console.log(api.defaults.baseURL);

export const baseApi = axios.create({
  baseURL: `${END_POINT}`,
});

console.log(baseApi.defaults.baseURL);
