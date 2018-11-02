import React from "react";
import "./PkmnOption.css";

function PkmnOption({ name, onClick, disabled, buttonHighlight }) {
  return (
    <button
      className={"answer ".concat(
        disabled
          ? buttonHighlight === "correct"
            ? "correctAnswer"
            : "wrongAnswer"
          : ""
      )}
      onClick={() => {
        onClick(name);
      }}
      disabled={disabled}
    >
      <p>{name.toUpperCase()}</p>
    </button>
  );
}

export default PkmnOption;
