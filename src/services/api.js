import axios from 'axios';
import store from '@/redux/store';
import { config } from '@/config/config';

export const axiosApi = axios.create({
  baseURL: config.backApi,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosApi.interceptors.request.use(
  async (config) => {
    const state = store.getState();
    const token = state.currentUser.userData.token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    if (config.url?.includes('upload-image')) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
