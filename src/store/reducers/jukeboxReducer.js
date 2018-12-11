import {
  ANSWER_SELECTED,
  CONTINUE,
  SONG_SELECTED,
  MUTE_TOGGLED,
  PLAY_TIME_TRIAL_BACKGROUND_MUSIC,
  PLAY_STANDARD_GAME_BACKGROUND_MUSIC,
  PLAYBACK_STATUS_PLAYING,
  PLAYBACK_STATUS_PAUSED,
  PLAYBACK_STATUS_STOPPED,
  PLAY_THE_MUSIC,
  STOP_THE_MUSIC,
  PAUSE_THE_MUSIC,
} from '../actions/Actions'

export default function jukeboxReducer(
  state = {
    currentSong: '',
    playbackStatus: PLAYBACK_STATUS_STOPPED,
    volume: 0, //CAMBIAR
  },
  action
) {
  switch (action.type) {
    case ANSWER_SELECTED:
      return Object.assign({}, state, {
        playbackStatus: action.answer
          ? state.playbackStatus
          : PLAYBACK_STATUS_PAUSED,
      })
    case CONTINUE:
      return Object.assign({}, state, {
        playbackStatus: PLAYBACK_STATUS_PLAYING,
      })
    case SONG_SELECTED:
      return Object.assign({}, state, {
        currentSong: action.songName,
      })
    case MUTE_TOGGLED:
      return Object.assign({}, state, {
        volume: state.volume === 0 ? 20 : 0,
      })
    case PLAY_TIME_TRIAL_BACKGROUND_MUSIC:
      return Object.assign({}, state, {
        currentSong: '/pokemonMusic/Intense/' + action.songName,
      })
    case PLAY_STANDARD_GAME_BACKGROUND_MUSIC:
      return Object.assign({}, state, {
        currentSong: '/pokemonMusic/Chill/' + action.songName,
      })
    case PLAY_THE_MUSIC:
      return Object.assign({}, state, {
        playbackStatus: PLAYBACK_STATUS_PLAYING,
      })
    case PAUSE_THE_MUSIC:
      return Object.assign({}, state, {
        playbackStatus: PLAYBACK_STATUS_PAUSED,
      })
    case STOP_THE_MUSIC:
      return Object.assign({}, state, {
        playbackStatus: PLAYBACK_STATUS_STOPPED,
      })
    default:
      return state
  }
}
