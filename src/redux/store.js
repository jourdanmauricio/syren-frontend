import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from '@reduxjs/toolkit';
import userSlice, {
  setUserData,
  setUserAppointments,
  LOCAL_STORAGE_KEY,
  updateUserData,
} from './user.slice';

const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  matcher: isAnyOf(setUserData, setUserAppointments, updateUserData),
  effect: (action, listenerApi) => {
    return localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(listenerApi.getState().currentUser)
    );
  },
});

const store = configureStore({
  reducer: {
    currentUser: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
});

export default store;
