import { createSlice } from '@reduxjs/toolkit';

const initialUiState = { cartOpen: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.cartOpen = !state.cartOpen;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
