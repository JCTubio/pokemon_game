import {
  STANDARD_MODE,
  CHANGE_GAME_MODE,
  GAME_FINISHED,
} from '../actions/Actions'

export default function turnReducer(
  state = {
    gameMode: STANDARD_MODE,
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
