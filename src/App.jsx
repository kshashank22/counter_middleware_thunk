import React from "react";
import { Provider } from "react-redux";
import CounterPage from "./page/CounterPage";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CounterPage />
      </div>
    </Provider>
  );
}

export default App;
