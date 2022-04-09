import {configureStore} from '@reduxjs/toolkit';
import cart from './reducers/cart';
import stringMiddleware from '../middleware/stringMiddleware';

export const store = configureStore({
  reducer: {cart},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production"
})