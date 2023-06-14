import { createStore } from 'redux';

const initialState = { counter: 0, show: true };

// action 상수 정의하기
export const INCREMENT = 'increment';
export const INCREASE = 'increase';
export const DECREMENT = 'decrement';
export const TOGGLE = 'toggle';

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      show: state.show,
    };
  }
  if (action.type === INCREASE) {
    return {
      counter: state.counter + action.amount,
      show: state.show,
    };
  }
  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
      show: state.show,
    };
  }
  if (action.type === TOGGLE) {
    return {
      counter: state.counter,
      show: !state.show,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
