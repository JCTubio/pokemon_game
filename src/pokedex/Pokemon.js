import React from "react";

function Pokemon({ name, onClick, disabled }) {
  return (
    <button
      className="answer"
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
