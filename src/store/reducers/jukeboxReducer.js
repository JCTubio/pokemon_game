import { SONG_SELECTED, MUTE_TOGGLED } from "../actions/Actions";

export default function jukeboxReducer(
  state = {
    currentSong: "Battle Theme (Instrumental)",
    playbackStatus: false
  },
  action
) {
  switch (action.type) {
    case SONG_SELECTED:
      return Object.assign({}, state, {
        currentSong: action.songName
      });
    case MUTE_TOGGLED:
      return Object.assign({}, state, {
        playbackStatus: state.playbackStatus ? false : true
      });
    default:
      return state;
  }
}
