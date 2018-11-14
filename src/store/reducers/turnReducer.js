import {
  ANSWER_SELECTED,
  CONTINUE,
  RESET_STANDARD_MODE,
  TT_ANSWER_SELECTED,
  TT_CONTINUE,
  TT_GAME_FINISHED,
  NATURAL_TIME_COUNTDOWN,
  RESET_TT_MODE,
  ROTOM_TALK,
} from '../actions/Actions'
import {
  QUICK_TURN_DURATION,
  REGULAR_TURN_DURATION,
  TIME_TRIAL_TURN_DURATION,
  TIME_TRIAL_INITIAL_TIME,
  POKEDEX_GLOW_COLOR_DEFAULT,
  POKEDEX_GLOW_COLOR_CORRECT,
  POKEDEX_GLOW_COLOR_INCORRECT,
  ROTOM_STYLE_CLASS_DEFAULT,
  ROTOM_STYLE_CLASS_CORRECT,
  ROTOM_STYLE_CLASS_INCORRECT,
  ROTOM_STYLE_CLASS_TTSTART,
  ROTOM_STYLE_CLASS_TTEND,
} from '../../components/app/config'

export default function turnReducer(
  state = {
    turnData: {
      options: ['Oops!', 'Something', 'went', 'wrong!'],
      sprite: 'xd',
    },
    isAnswerSelected: false,
    turnNumber: 1,
    highScore: 0,
    currentScore: 0,
    pokedexGlowColor: POKEDEX_GLOW_COLOR_DEFAULT,
    rotomMessage: '',
    turnDuration: REGULAR_TURN_DURATION,
    timeLeft: TIME_TRIAL_INITIAL_TIME,
    isTimerActive: false,
    isRotomOnScreen: false,
    rotomMessageStyle: ROTOM_STYLE_CLASS_DEFAULT,
    pokemonsEncountered: [],
  },
  action
) {
  switch (action.type) {
    case ANSWER_SELECTED:
      return Object.assign({}, state, {
        isAnswerSelected: true,
        pokemonsEncountered: [
          ...state.pokemonsEncountered,
          {
            pokemon:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
              parseInt(state.turnData.sprite.id, 10) +
              '.png',
            correct: action.answer,
          },
        ],
        currentScore: action.answer ? state.currentScore + 1 : 0,
        highScore:
          action.answer && state.highScore <= state.currentScore
            ? state.highScore + 1
            : state.highScore,
        pokedexGlowColor: action.answer
          ? POKEDEX_GLOW_COLOR_CORRECT
          : POKEDEX_GLOW_COLOR_INCORRECT,
        turnDuration: action.answer
          ? QUICK_TURN_DURATION
          : REGULAR_TURN_DURATION,
      })
    case ROTOM_TALK:
      return Object.assign({}, state, {
        isRotomOnScreen: true,
        rotomMessageStyle: action.answer
          ? ROTOM_STYLE_CLASS_CORRECT
          : ROTOM_STYLE_CLASS_INCORRECT,
        rotomMessage: action.answer
          ? correctPokemonRotomMessage(state.turnData.sprite)
          : wrongPokemonRotomMessage(state.turnData.sprite),
      })
    case CONTINUE:
      return Object.assign({}, state, {
        isAnswerSelected: false,
        turnData: action.turnData,
        turnNumber: state.turnNumber + 1,
        pokedexGlowColor: POKEDEX_GLOW_COLOR_DEFAULT,
        rotomMessage: '',
        isRotomOnScreen: false,
        turnDuration: REGULAR_TURN_DURATION,
      })
    case RESET_STANDARD_MODE:
      return Object.assign({}, state, {
        pokemonsEncountered: [],
        turnData: action.turnData,
        isAnswerSelected: false,
        turnNumber: state.turnNumber + 1,
        highScore: 0,
        currentScore: 0,
        pokedexGlowColor: POKEDEX_GLOW_COLOR_DEFAULT,
        rotomMessage: '',
        isRotomOnScreen: false,
        turnDuration: REGULAR_TURN_DURATION,
        isTimerActive: false,
        timeLeft: 15000,
      })
    case TT_ANSWER_SELECTED:
      return Object.assign({}, state, {
        isAnswerSelected: true,
        pokemonsEncountered: [
          ...state.pokemonsEncountered,
          {
            pokemon:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
              parseInt(state.turnData.sprite.id, 10) +
              '.png',
            correct: action.answer,
          },
        ],
        turnDuration: TIME_TRIAL_TURN_DURATION,
        currentScore: action.answer
          ? state.currentScore + 1
          : state.currentScore,
        timeLeft: action.answer ? state.timeLeft + 2000 : state.timeLeft - 2000,
        pokedexGlowColor: action.answer
          ? POKEDEX_GLOW_COLOR_CORRECT
          : POKEDEX_GLOW_COLOR_INCORRECT,
        isTimerActive: false,
        isRotomOnScreen: false,
      })
    case TT_CONTINUE:
      return Object.assign({}, state, {
        isAnswerSelected: false,
        turnData: action.turnData,
        turnNumber: state.turnNumber + 1,
        pokedexGlowColor: POKEDEX_GLOW_COLOR_DEFAULT,
        isTimerActive: true,
      })
    case NATURAL_TIME_COUNTDOWN:
      return Object.assign({}, state, {
        timeLeft: state.isTimerActive ? state.timeLeft - 1000 : state.timeLeft,
      })
    case RESET_TT_MODE:
      return Object.assign({}, state, {
        pokemonsEncountered: [],
        isAnswerSelected: false,
        turnNumber: state.turnNumber + 1,
        pokedexGlowColor: POKEDEX_GLOW_COLOR_DEFAULT,
        turnDuration: 2000,
        currentScore: 0,
        timeLeft: 15000,
        isTimerActive: false,
        isRotomOnScreen: true,
        rotomMessage: 'Get ready\nfor...\nTime Trial!',
        rotomMessageStyle: ROTOM_STYLE_CLASS_TTSTART,
      })
    case TT_GAME_FINISHED:
      return Object.assign({}, state, {
        isAnswerSelected: true,
        isTimerActive: false,
        turnDuration: 3000,
        rotomMessage: "Time's up!\nLet's see how\nwell you did...",
        rotomMessageStyle: ROTOM_STYLE_CLASS_TTEND,
      })
    default:
      return state
  }
}

function correctPokemonRotomMessage(answer) {
  return "Good Job!\nThat's\n" + answer.ename + '!'
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
