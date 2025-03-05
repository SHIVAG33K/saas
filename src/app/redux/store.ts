// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
