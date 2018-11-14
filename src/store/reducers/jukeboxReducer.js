import {
  SONG_SELECTED,
  MUTE_TOGGLED,
  PLAY_TIME_TRIAL_BACKGROUND_MUSIC,
  PLAY_STANDARD_GAME_BACKGROUND_MUSIC,
  CUT_THE_MUSIC,
} from '../actions/Actions'

export default function jukeboxReducer(
  state = {
    currentSong: 'Battle Theme (Instrumental)',
    playbackStatus: false,
    volume: 50,
  },
  action
) {
  switch (action.type) {
    case SONG_SELECTED:
      return Object.assign({}, state, {
        currentSong: action.songName,
        playbackStatus: true,
      })
    case MUTE_TOGGLED:
      return Object.assign({}, state, {
        volume: state.volume === 0 ? 50 : 0,
      })
    case PLAY_TIME_TRIAL_BACKGROUND_MUSIC:
      return Object.assign({}, state, {
        currentSong: 'Battle Theme (8-Bits)',
        playbackStatus: true,
      })
    case PLAY_STANDARD_GAME_BACKGROUND_MUSIC:
      return Object.assign({}, state, {
        currentSong: 'Battle Theme (Instrumental)',
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
