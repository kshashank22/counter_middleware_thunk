import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IncrementCounter, DecrementCounter, GetData } from "../redux/actions";
import "./CounterPage.css";
import ButtonCounter from "../components/counterButton/CounterButton";

function CounterPage() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  const middleware = () => {
    dispatch(IncrementCounter());
  };

  async function apiMiddleware(dispatch) {
    const responseData = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    const data = await responseData.json();
    dispatch(GetData(data.name));
  }

  return (
    <div className="counterContainer">
      {count.userData !== "" ? <h1>Counter:{count?.userData}</h1> : ""}
      <p>{count.count}</p>
      <div className="buttonContainer">
        <ButtonCounter
          value={"Increase"}
          className={"buttons"}
          onclick={() => dispatch(middleware)}
        />
        <ButtonCounter
          value={"Decrease"}
          className={"buttons"}
          onclick={() => dispatch(DecrementCounter())}
        />
        <ButtonCounter
          value={"Get Data"}
          className={"buttons"}
          onclick={() => dispatch(apiMiddleware)}
        />
      </div>
    </div>
  );
}

export default CounterPage;
