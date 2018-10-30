import { combineReducers } from "redux";
import turn from "./turnReducer";
import jukebox from "./jukeboxReducer";

const combinedReducers = combineReducers({
  turn,
  jukebox
});

export default combinedReducers;
