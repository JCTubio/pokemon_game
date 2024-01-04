import {
  STANDARD_MODE,
  CHANGE_GAME_MODE,
  TIME_TRIAL,
  GAME_FINISHED,
} from '../actions/Actions'

export default function turnReducer(
  state = {
    gameMode: TIME_TRIAL,
  },
  action
) {
  switch (action.type) {
    case CHANGE_GAME_MODE:
      return Object.assign({}, state, {
        gameMode: action.mode,
      })
    case GAME_FINISHED:
      return Object.assign({}, state, {
        gameMode: GAME_FINISHED,
      })
    default:
      return state
  }
}
