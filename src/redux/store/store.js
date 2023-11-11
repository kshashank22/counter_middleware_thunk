import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import CounterSlice from "../reducers/CounterSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: CounterSlice,
  middleware: (applyMiddleware) => applyMiddleware(thunk),
});

export default store;
