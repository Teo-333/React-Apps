import cartReducer, { addToCart, removeFromCart, clearCart, CartItem } from './cartSlice';

describe('cart slice', () => {
  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual({
      items: [],
      totalQuantity: 0,
      changed: false,
    });
  });

  it('should handle adding an item to the cart', () => {
    const previousState = { items: [], totalQuantity: 0, changed: false };
    const newItem: CartItem = { id: '1', meal: 'Meal 1', category: 'Category 1', area: 'Area 1', instructions: 'Instructions 1', img: 'img1.jpg', price: 10, quantity: 2 };

    expect(cartReducer(previousState, addToCart(newItem))).toEqual({
      items: [newItem],
      totalQuantity: 2,
      changed: true,
    });
  });

  it('should handle removing an item from the cart', () => {
    const previousState = {
      items: [{ id: '1', meal: 'Meal 1', category: 'Category 1', area: 'Area 1', instructions: 'Instructions 1', img: 'img1.jpg', price: 10, quantity: 2 }],
      totalQuantity: 2,
      changed: false,
    };

    expect(cartReducer(previousState, removeFromCart('1'))).toEqual({
      items: [],
      totalQuantity: 0,
      changed: true,
    });
  });

  it('should handle clearing the cart', () => {
    const previousState = {
      items: [{ id: '1', meal: 'Meal 1', category: 'Category 1', area: 'Area 1', instructions: 'Instructions 1', img: 'img1.jpg', price: 10, quantity: 2 }],
      totalQuantity: 2,
      changed: false,
    };

    expect(cartReducer(previousState, clearCart())).toEqual({
      items: [],
      totalQuantity: 0,
      changed: true,
    });
  });
});
