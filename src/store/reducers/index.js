import { combineReducers } from 'redux'
import turn from './turnReducer'
import jukebox from './jukeboxReducer'
import app from './appReducer'

const combinedReducers = combineReducers({
  app,
  turn,
  jukebox,
})

export default combinedReducers
