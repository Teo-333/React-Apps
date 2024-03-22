import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, EnhancedStore, combineReducers, AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import cartReducer, { CartItem, CartState } from '../../../data/cartSlice';
import OrderItem from './OrderItem';

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
  const store: EnhancedStore<RootState, AnyAction, [ThunkDispatch<RootState, void, AnyAction>]> = configureStore({
    reducer: rootReducer,
    preloadedState: reduxState,
  });

  return {
    ...render(
      <Provider store={store}>
        {ui}
      </Provider>
    ),
    store,
  };
};

test('renders OrderItem component and handles item removal from cart', () => {
  const item: CartItem = {
    id: '1',
    meal: 'Meal 1',
    category: 'Category 1',
    area: 'Area 1',
    instructions: 'Instructions 1',
    img: 'img1.jpg',
    price: 10,
    quantity: 2,
  };

  const { store } = renderWithProviders(<OrderItem {...item} />, {
    reduxState: {
      cart: {
        items: [item],
        totalQuantity: 2,
        changed: false,
      },
    },
  });

  const removeButton = screen.getByText(/Remove/);
  fireEvent.click(removeButton);

  const state = store.getState().cart;
  expect(state.items).toEqual([]);
  expect(state.totalQuantity).toEqual(0);
});
