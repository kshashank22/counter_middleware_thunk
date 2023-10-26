import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import CounterReducer from "../reducers/CounterReducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: CounterReducer,
  middleware: (applyMiddleware) => applyMiddleware(thunk),
});

export default store;
