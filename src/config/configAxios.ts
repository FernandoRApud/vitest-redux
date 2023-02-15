/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getLocalStorage, removeAllLocalStorage } from '../hooks/localStorageHook';
import { removeAllSessionStorage } from '../hooks/sessionStorageHook';

const defaultOptions = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const clientAxios = axios.create(defaultOptions);

clientAxios.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    removeAllLocalStorage();
    removeAllSessionStorage();
    window.location.href = '/';
  }

  return Promise.reject(error);
});

clientAxios.interceptors.request.use((config) => {
  const token = getLocalStorage('token');
  if (config.headers) config.headers.authorization = token || '';
  return config;
});

export default clientAxios;
