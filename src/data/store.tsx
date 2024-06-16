import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import mealsReducer from '../api/apiSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    meals: mealsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
