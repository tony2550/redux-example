import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  // useSelector를 호출해서 함수를 넣어주어야한다.
  // react-redux가 실행하는 함수 인 것을 인지하고 있어야한다.
  // store에서 관리되는 상태 데이터를 가져오게 된다.
  // react-redux는 useSelector를 사용할 때 이 컴포넌트가 store에 자동으로 구독하게 설정한다. ***
  const counter = useSelector(state => state.counter.value);
  const toggle = useSelector(state => state.counter.show);

  const plusHandler = () => {
    // 여기서 type은 redux store의 reducer에서 사용하는 값 중 하나여야한다.
    dispatch(counterActions.increment);
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type : SOME_UNIQUE_IDENTIFIER, payload: 10 } payload는 디폴트 값이다.
  };

  const minusHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={minusHandler}>-1</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={plusHandler}>+1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
