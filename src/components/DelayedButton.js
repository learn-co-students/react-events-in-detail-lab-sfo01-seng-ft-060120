// Code DelayedButton Component Here
import React from "react";

function DelayedButton(props) {
  const handleClick = (e) => {
    e.persist();
    setTimeout(() => props.onDelayedClick(e), props.delay);
  };

  return <button onClick={(e) => handleClick(e)}>DELAYED BUTTON</button>;
}

export default DelayedButton;
