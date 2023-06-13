const redux = require('redux');

// reducer function
// state , action
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        };
    }
    return state;
};

// store
const store = redux.createStore(counterReducer);

// console.log(store.getState());

// 구독시 변경함수
const counterSubscriber = () => {
    // 최신 state 스냅샷을 제공
    const latestState = store.getState();
    console.log(latestState);
};

// 구독 연결
store.subscribe(counterSubscriber);

// action
// dispatch() 는 액션을 발송하는 메소드이다.
// 기본 형태 => { type: ''}
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
