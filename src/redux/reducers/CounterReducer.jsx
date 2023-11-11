import { counter } from "../actions/constants";

const CounterReducer = (state = counter, action) => {
  switch (action.type) {
    case "counterIncrease":
      return { ...state, count: state.count + 1 };
    case "counterDecrease":
      if (state.count < 1) {
        return state;
      }
      return { ...state, count: state.count - 1 };
    case "useradd":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default CounterReducer;
