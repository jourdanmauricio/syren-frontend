import { axiosApi } from './api';

export const scheduleAppointment = async (data) => {
  try {
    await axiosApi.post('/appointments/schedule', data);
  } catch (error) {
    const message = error.response
      ? `${error.response.data.statusCode} - ${error.response.data.message}`
      : error.message;
    throw message;
  }
};

export const cancelAppointment = async (id) => {
  try {
    await axiosApi.put(`/appointments/cancel/${id}`);
  } catch (error) {
    const message = error.response
      ? `${error.response.data.statusCode} - ${error.response.data.message}`
      : error.message;
    throw message;
  }
};
