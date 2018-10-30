import React from "react";

function Pokemon({ name, onClick, disabled, buttonHighlight }) {
  return (
    <button
      className={"answer ".concat( disabled ? buttonHighlight === "correct" ? "correctAnswer" : "wrongAnswer" : "")}
      onClick={() => {
        onClick(name);
      }}
      disabled={disabled}
    >
      <h4>{name}</h4>
    </button>
  );
}

export default Pokemon;
