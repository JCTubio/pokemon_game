import {
  ANSWER_SELECTED,
  CONTINUE,
  RESET_STANDARD_MODE,
  TT_ANSWER_SELECTED,
  TT_CONTINUE,
  NATURAL_TIME_COUNTDOWN,
  RESET_TT_MODE,
} from '../actions/Actions'
import pkmnJson from '../../resources/pokedex'
import { shuffle, sample } from 'underscore'
import {
  QUICK_TURN_DURATION,
  REGULAR_TURN_DURATION,
  TIME_TRIAL_TURN_DURATION,
} from '../../components/app/config'

function getTurnData(pkmnJson) {
  const allPkmn = pkmnJson.reduce(function(p, c, i) {
    return p.concat(c.ename)
  }, [])
  const fourPkmn = shuffle(allPkmn).slice(0, 4)
  const answer = sample(fourPkmn)

  return {
    options: fourPkmn,
    sprite: pkmnJson.find(pokemon => pokemon.ename === answer),
  }
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
    pokedexGlow: 'rgb(0, 205, 255)',
    rotomMessage: '',
    turnDuration: REGULAR_TURN_DURATION,
    timeLeft: 15000,
    timerActive: false,
  },
  action
) {
  switch (action.type) {
    case ANSWER_SELECTED:
      return Object.assign({}, state, {
        highlight: true,
        clickedThisTurn: true,
        correctAnswers: action.answer ? state.correctAnswers + 1 : 0,
        bestStreak:
          action.answer && state.bestStreak <= state.correctAnswers
            ? state.bestStreak + 1
            : state.bestStreak,
        pokedexGlow: action.answer ? '#00FF00' : '#FF0000',
        rotomMessage: action.answer
          ? correctPokemonRotomMessage(state.turnData.sprite)
          : wrongPokemonRotomMessage(state.turnData.sprite),
        turnDuration: action.answer
          ? QUICK_TURN_DURATION
          : REGULAR_TURN_DURATION,
      })
    case CONTINUE:
      return Object.assign({}, state, {
        highlight: false,
        turnData: getTurnData(state.pkmnJson),
        turnNumber: state.turnNumber + 1,
        clickedThisTurn: false,
        pokedexGlow: 'rgb(0, 205, 255)',
        rotomMessage: '',
        turnDuration: REGULAR_TURN_DURATION,
      })
    case RESET_STANDARD_MODE:
      return Object.assign({}, state, {
        turnData: getTurnData(state.pkmnJson),
        highlight: false,
        turnNumber: state.turnNumber + 1,
        clickedThisTurn: false,
        bestStreak: 0,
        correctAnswers: 0,
        pokedexGlow: 'rgb(0, 205, 255)',
        rotomMessage: '',
        turnDuration: REGULAR_TURN_DURATION,
      })
    case TT_ANSWER_SELECTED:
      return Object.assign({}, state, {
        highlight: true,
        clickedThisTurn: true,
        timeLeft: action.answer ? state.timeLeft + 1000 : state.timeLeft - 1000,
        pokedexGlow: action.answer ? '#00FF00' : '#FF0000',
        timerActive: false,
      })
    case TT_CONTINUE:
      return Object.assign({}, state, {
        highlight: false,
        turnData: getTurnData(state.pkmnJson),
        turnNumber: state.turnNumber + 1,
        clickedThisTurn: false,
        pokedexGlow: 'rgb(0, 205, 255)',
        timerActive: true,
      })
    case NATURAL_TIME_COUNTDOWN:
      return Object.assign({}, state, {
        timeLeft: state.timerActive ? state.timeLeft - 1000 : state.timeLeft,
      })
    case RESET_TT_MODE:
      return Object.assign({}, state, {
        turnData: getTurnData(state.pkmnJson),
        highlight: false,
        turnNumber: state.turnNumber + 1,
        clickedThisTurn: false,
        pokedexGlow: 'rgb(0, 205, 255)',
        turnDuration: TIME_TRIAL_TURN_DURATION,
        timeLeft: 15000,
        timerActive: false,
      })
    default:
      return state
  }
}

function correctPokemonRotomMessage(answer) {
  return answer.type.length > 1
    ? "Correct!\nThat's " +
        answer.ename +
        '.\na ' +
        answer.type[0] +
        '/' +
        answer.type[1] +
        '\ntype pokemon!'
    : "Correct!\nThat's " +
        answer.ename +
        '.\na ' +
        answer.type[0] +
        '\ntype pokemon!'
}

function wrongPokemonRotomMessage(answer) {
  return answer.type.length > 1
    ? "Incorrect!\nThat's " +
        answer.ename +
        '.\na ' +
        answer.type[0] +
        '/' +
        answer.type[1] +
        '\ntype pokemon!'
    : "Incorrect!\nThat's " +
        answer.ename +
        '.\na ' +
        answer.type[0] +
        '\ntype pokemon!'
}
