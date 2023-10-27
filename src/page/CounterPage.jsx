import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchedData } from "../redux/reducers/CounterSlice";
import "./CounterPage.css";
import ListItems from "../components/ListItems/ListItems";

function CounterPage() {
  const listItems = useSelector((state) => state.list);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchedData());
  }, []);

  if (status === "loading") {
    return <p className="error">Loading...</p>;
  }
  if (status === "failed") {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="apiContainer">
      <h1>Api Data</h1>
      <ul>
        {listItems.map((each) => (
          <ListItems key={each.id} values={each} />
        ))}
      </ul>
    </div>
  );
}

export default CounterPage;
