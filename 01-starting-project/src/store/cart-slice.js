import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemtoCart(state, action) {
      const inputItem = action.payload;
      // 이미 있는 item 인지
      const existingItem = state.items.find(item => item.id === inputItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: inputItem.id,
          price: inputItem.price,
          quantity: 1,
          totalPrice: inputItem.price,
          title: inputItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + inputItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        // existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
