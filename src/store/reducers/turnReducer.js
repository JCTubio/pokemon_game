import { ANSWER_SELECTED, CONTINUE } from "../actions/Actions";
import pkmnJson from "../../resources/pokedex";
import { shuffle, sample } from "underscore";

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

export default function turnReducer(
  state = {
    pkmnJson,
    turnData: getTurnData(pkmnJson),
    highlight: false,
    turnNumber: 1,
    clickedThisTurn: false,
    correctAnswers: 0,
    wrongAnswers: 0,
    buttonHighlight: ""
  },
  action
) {
  switch (action.type) {
    case ANSWER_SELECTED:
      const isCorrect = state.turnData.sprite.ename === action.answer;
      return Object.assign({}, state, {
        highlight: true,
        clickedThisTurn: true,
        correctAnswers: isCorrect
          ? state.correctAnswers + 1
          : state.correctAnswers,
        wrongAnswers: isCorrect ? state.wrongAnswers : state.wrongAnswers + 1,
        buttonHighlight: isCorrect
          ? (state.buttonHighlight = "correct")
          : (state.buttonHighlight = "wrong")
      });
    case CONTINUE:
      return Object.assign({}, state, {
        highlight: false,
        turnData: getTurnData(state.pkmnJson),
        turnNumber: state.turnNumber + 1,
        clickedThisTurn: false,
        buttonHighlight: ""
      });
    default:
      return state;
  }
}
