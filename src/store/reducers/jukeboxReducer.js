import {
  SONG_SELECTED,
  MUTE_TOGGLED,
  TIME_TRIAL_STARTED,
  CUT_THE_MUSIC,
} from '../actions/Actions'

export default function jukeboxReducer(
  state = {
    currentSong: 'Battle Theme (Instrumental)',
    playbackStatus: false,
  },
  action
) {
  switch (action.type) {
    case SONG_SELECTED:
      return Object.assign({}, state, {
        currentSong: action.songName,
      })
    case MUTE_TOGGLED:
      return Object.assign({}, state, {
        playbackStatus: state.playbackStatus ? false : true,
      })
    case TIME_TRIAL_STARTED:
      return Object.assign({}, state, {
        currentSong: 'Battle Theme (8-Bits)',
        playbackStatus: true,
      })
    case CUT_THE_MUSIC:
      return Object.assign({}, state, {
        playbackStatus: false,
      })
    default:
      return state
  }
}
