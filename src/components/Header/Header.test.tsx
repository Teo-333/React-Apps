import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, EnhancedStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer, { CartState } from '../../data/cartSlice';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

interface RootState {
  cart: CartState;
}

const rootReducer = combineReducers({
  cart: cartReducer,
});

const renderWithProviders = (
  ui: React.ReactElement,
  { reduxState }: { reduxState?: Partial<RootState> } = {}
) => {
  const store: EnhancedStore<RootState> = configureStore({
    reducer: rootReducer,
    preloadedState: reduxState,
  });

  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

test('renders Header component with cart items displaying the correct total quantity', () => {
  renderWithProviders(<Header />, {
    reduxState: {
      cart: { items: [], totalQuantity: 5, changed: false },
    },
  });

  const cartQuantity = screen.getByText(/5/);
  expect(cartQuantity).toBeInTheDocument();
});
