import { axiosApi } from './api';

export const getUser = async (id) => {
  try {
    const response = await axiosApi.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    const message = error.response
      ? `${error.response.data.statusCode} - ${error.response.data.message}`
      : error.message;
    throw message;
  }
};

export const register = async (data) => {
  try {
    const response = await axiosApi.post('/users/register', data);
    return response.data;
  } catch (error) {
    const message = error.response
      ? `${error.response.data.statusCode} - ${error.response.data.message}`
      : error.message;
    throw message;
  }
};

export const login = async (data) => {
  try {
    const response = await axiosApi.post('/users/login', data);
    return response.data;
  } catch (error) {
    const message = error.response
      ? `${error.response.data.statusCode} - ${error.response.data.message}`
      : error.message;
    throw message;
  }
};

export const forgotPassword = async (data) => {
  try {
    const response = await axiosApi.put('/users/forgot-password', data);
    return response.data;
  } catch (error) {
    const message = error.response
      ? `${error.response.data.statusCode} - ${error.response.data.message}`
      : error.message;
    throw message;
  }
};

export const recoveryPassword = async (data) => {
  try {
    const response = await axiosApi.put('/users/recovery-password', data);
    return response.data;
  } catch (error) {
    const message = error.response
      ? `${error.response.data.statusCode} - ${error.response.data.message}`
      : error.message;
    throw message;
  }
};

export const changePassword = async (id, data) => {
  try {
    const response = await axiosApi.put(`/users/change-pass/${id}`, data);
    return response.data;
  } catch (error) {
    const message = error.response
      ? `${error.response.data.statusCode} - ${error.response.data.message}`
      : error.message;
    throw message;
  }
};

export const updateUser = async (id, data) => {
  try {
    const response = await axiosApi.put(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    const message = error.response
      ? `${error.response.data.statusCode} - ${error.response.data.message}`
      : error.message;
    throw message;
  }
};

export const uploadImage = async (data) => {
  try {
    const response = await axiosApi.post(`/users/upload-image`, data);
    return response.data;
  } catch (error) {
    const message = error.response
      ? `${error.response.data.statusCode} - ${error.response.data.message}`
      : error.message;
    throw message;
  }
};
