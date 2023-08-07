import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlices';
import eventReducer from './slices/eventSlices';
import toastReducer from './slices/toastSlices';
import pengajianSlices from './slices/pengajianSlices';

export const store = configureStore({
 reducer: {
  auth: authReducer,
  events: eventReducer,
  toast: toastReducer,
  pengajians: pengajianSlices,
 },
});
