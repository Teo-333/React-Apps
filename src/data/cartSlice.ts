import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  category: string;
  area: string;
  instructions: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  changed: boolean;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
      state.changed = true;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.totalQuantity -= state.items[index].quantity;
        state.items.splice(index, 1);
        state.changed = true;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.changed = true;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
