import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }
  function handleOnMouse() {
    setMouseOver(true);
  }

  function handleOutMouse() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        style={{ backgroundColor: isMouseOver ? "black " : "white" }}
        onMouseOver={handleOnMouse}
        onMouseOut={handleOutMouse}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
