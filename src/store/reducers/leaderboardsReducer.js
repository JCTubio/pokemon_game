import {
  UPDATE_DAILY_LEADERBOARD,
  UPDATE_MONTHLY_LEADERBOARD,
  UPDATE_ALL_TIME_LEADERBOARD,
  SHOW_LEADERBOARD,
  HIDE_LEADERBOARD
} from '../actions/Actions'

export default function leaderboardsReducer(
  state = {
    daily: [],
    monthly: [],
    allTime: [],
    isShowing: false
  },
  action
) {
  switch (action.type) {
    case UPDATE_DAILY_LEADERBOARD:
      return Object.assign({}, state, {
        daily: action.scores
      })
    case UPDATE_MONTHLY_LEADERBOARD:
      return Object.assign({}, state, {
        monthly: action.scores
      })
    case UPDATE_ALL_TIME_LEADERBOARD:
      return Object.assign({}, state, {
        allTime: action.scores,
      })
    case SHOW_LEADERBOARD:
      return Object.assign({}, state, {
        isShowing: true
      })
    case HIDE_LEADERBOARD:
      return Object.assign({}, state, {
        isShowing: false
      })
    default:
      return state
  }
}
