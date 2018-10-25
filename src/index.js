import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import pkmnJson from "./resources/pokedex";
import { shuffle, sample } from "underscore";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

function getTurnData(pkmnJson) {
  const allPkmn = pkmnJson.reduce(function(p, c, i) {
    return p.concat(c.ename);
  }, []);
  const fourPkmn = shuffle(allPkmn).slice(0, 4);
  const answer = sample(fourPkmn);

  return {
    options: fourPkmn,
    sprite: pkmnJson.find(pokemon => pokemon.ename === answer)
  };
}

function reducer(
  state = {
    pkmnJson,
    turnData: getTurnData(pkmnJson),
    highlight: false,
    turnNumber: 1,
    clickedThisTurn: false,
    correctAnswers: 0,
    wrongAnswers: 0
  },
  action
) {
  switch (action.type) {
    case "ANSWER_SELECTED":
      const isCorrect = state.turnData.sprite.ename === action.answer;
      return Object.assign({}, state, {
        highlight: true,
        clickedThisTurn: true,
        correctAnswers: isCorrect
          ? state.correctAnswers + 1
          : state.correctAnswers,
        wrongAnswers: isCorrect ? state.wrongAnswers : state.wrongAnswers + 1
      });
    case "CONTINUE":
      return Object.assign({}, state, {
        highlight: false,
        turnData: getTurnData(state.pkmnJson),
        turnNumber: state.turnNumber + 1,
        clickedThisTurn: false
      });
    default:
      return state;
  }
}

let store = Redux.createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <ReactRedux.Provider store={store}>
      <React.Fragment>
        <Route exact path="/" component={App} />
      </React.Fragment>
    </ReactRedux.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
