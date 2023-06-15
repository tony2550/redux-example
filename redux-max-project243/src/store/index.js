import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counter';
import authSlice from './auth';

// counterslice - actions 객체에서 자동으로 해주는 것!
// counterSlice.actions.toggleCounter(); // action creator
//return an action object - {type: 'unique 식별자'}

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
}); // reducer가 아닌설정 객체를 전달해야한다

export const counterActions = counterSlice.actions; // counter actions export
export const authActions = authSlice.actions;

export default store;
