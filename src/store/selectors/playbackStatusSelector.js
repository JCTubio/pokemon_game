import get from 'lodash/get'

export default function getPlaybackStatus(state) {
  return get(state, 'jukebox.playbackStatus')
}
