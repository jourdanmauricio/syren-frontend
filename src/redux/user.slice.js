import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/helpers/constants';

export const LOCAL_STORAGE_KEY = 'currentUser';

export const userSlice = createSlice({
  name: 'currentUser',
  initialState:
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    updateUserData: (state, action) => {
      state.userData.user = action.payload;
    },
    setUserAppointments: (state, { payload }) => {
      state.userAppointments = payload;
    },
    updateAppointment: (state, { payload }) => {
      const newAppointments = [...state.userAppointments].map((appointment) =>
        appointment.id === payload
          ? { ...appointment, status: 'cancelled' }
          : appointment
      );

      state.userAppointments = newAppointments;
    },
  },
});

export const {
  setUserData,
  setUserAppointments,
  updateAppointment,
  updateUserData,
} = userSlice.actions;
export default userSlice.reducer;
