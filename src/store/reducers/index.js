import { combineReducers } from 'redux'
import turn from './turnReducer'
import jukebox from './jukeboxReducer'
import app from './appReducer'
import leaderboards from './leaderboardsReducer'

const combinedReducers = combineReducers({
  app,
  turn,
  jukebox,
  leaderboards
})

export default combinedReducers
