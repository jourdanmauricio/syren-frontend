import { axiosApi } from './api';

export const create = async (data) => {
  try {
    const response = await axiosApi.post('/contacts', data);
    return response.data;
  } catch (error) {
    const message = error.response
      ? `${error.response.data.statusCode} - ${error.response.data.message}`
      : error.message;
    throw message;
  }
};
