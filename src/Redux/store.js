import { configureStore } from '@reduxjs/toolkit';
import orders from './ordersSlise';
import cart from './cartSlice';

export const store = configureStore({
  reducer: {
    orders:orders,
    cart:cart
  }
})