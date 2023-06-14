import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, show: true };

// 전역상태의 slice를 미리 만들어 놓아야한다.
const counterSlice = createSlice({
  name: 'counter', // slice의 이름
  initialState: initialState, // 초기값
  reducers: {
    // 아주중요 reducer 메소드들
    increment(state) {
      state.counter++; // 상태 직접 변경 가능 ( 내부적으로 immer 패키지가 작동)
    }, // action이 필요없는 이유는 메소드 이름 자체가 액션을 나타내기 때문
    decrement(state) {
      state.counter--;
    }, // if문이 필요없다.
    // 사용자 함수이기 때문에 유연하게 두개의 파라미터를 받을 수 있다.
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.show = !state.show;
    },
  },
});

// counterSlice.actions.toggleCounter(); // action creator
//return an action object - {type: 'unique 식별자'}

const store = configureStore({
  reducer: counterSlice.reducer,
}); // reducer가 아닌설정 객체를 전달해야한다

export const counterActions = counterSlice.actions; // counter actions export

export default store;
