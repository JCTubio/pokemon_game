import React from "react";
import { connect } from "react-redux";
import "./App.css";
import "./resources/bootstrap.min.css";
import Turn from "./pokedex/Turn";

function mapStateToProps(state) {
  return {
    turnData: state.turnData,
    highlight: state.highlight,
    turnNumber: state.turnNumber,
    clickedThisTurn: state.clickedThisTurn,
    correctAnswers: state.correctAnswers,
    wrongAnswers: state.wrongAnswers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerSelected: answer => {
      dispatch({ type: "ANSWER_SELECTED", answer });
      setTimeout(function() {
        dispatch({ type: "CONTINUE" });
      }, 500);
    }
  };
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(function({
  turnData,
  highlight,
  onAnswerSelected,
  turnNumber,
  clickedThisTurn,
  correctAnswers,
  wrongAnswers
}) {
  return (
    <div className="container-fluid">
      <div className="header">
        <img
          src="../../images/whosthatpokemon.png"
          alt="title"
          className="headerImg"
        />
      </div>
      <div className="turnContainer">
        <div className="leftSpace" />
        <Turn
          key={turnNumber}
          {...turnData}
          highlight={highlight}
          onAnswerSelected={onAnswerSelected}
          clickedThisTurn={clickedThisTurn}
        />
        <div className="rightSpace" />
      </div>
      <h2 className="score">
        {correctAnswers}:{wrongAnswers}
      </h2>
    </div>
  );
});

export default App;
