import React from "react";

function ButtonCounter({ value, onclick, className }) {
  return (
    <button onClick={onclick} className={className}>
      {value}
    </button>
  );
}

export default ButtonCounter;