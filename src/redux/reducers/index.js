import { combineReducers } from "redux";
import CounterSlice from "./CounterSlice";

const rootReducer = combineReducers({
  CounterSlice,
});

export default rootReducer;
