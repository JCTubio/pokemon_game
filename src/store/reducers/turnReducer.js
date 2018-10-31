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
    bestStreak: 0,
    correctAnswers: 0,
    buttonHighlight: "",
    pokedexGlow: "rgb(0, 205, 255)"
  },
  action
) {
  switch (action.type) {
    case ANSWER_SELECTED:
      const isCorrect = state.turnData.sprite.ename === action.answer;
      return Object.assign({}, state, {
        highlight: true,
        clickedThisTurn: true,
        correctAnswers: isCorrect ? state.correctAnswers + 1 : 0,
        bestStreak:
          isCorrect && state.bestStreak <= state.correctAnswers
            ? state.bestStreak + 1
            : state.bestStreak,
        buttonHighlight: isCorrect ? "correct" : "wrong",
        pokedexGlow: isCorrect ? "#00FF00" : "#FF0000"
      });
    case CONTINUE:
      return Object.assign({}, state, {
        highlight: false,
        turnData: getTurnData(state.pkmnJson),
        turnNumber: state.turnNumber + 1,
        clickedThisTurn: false,
        buttonHighlight: "",
        pokedexGlow: "rgb(0, 205, 255)"
      });
    default:
      return state;
  }
}
