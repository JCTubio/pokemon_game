import { STANDARD_MODE } from '../actions/Actions'

export default function turnReducer(
  state = {
    gameMode: STANDARD_MODE,
  },
  action
) {
  switch (action.type) {
    case 'CHANGE_GAME_MODE':
      return Object.assign({}, state, {
        gameMode: action.mode,
      })
    default:
      return state
  }
}
