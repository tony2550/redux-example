import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, show: true };

// 전역상태의 slice를 미리 만들어 놓아야한다.
createSlice({
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
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.show = !state.show;
    },
  },
});

// action 상수 정의하기
export const INCREMENT = 'increment';
export const INCREASE = 'increase';
export const DECREMENT = 'decrement';
export const TOGGLE = 'toggle';

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      show: state.show,
    };
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      show: state.show,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      show: state.show,
    };
  }
  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      show: !state.show,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
