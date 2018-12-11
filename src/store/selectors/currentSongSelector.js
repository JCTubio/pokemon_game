import get from 'lodash/get'

export default function getCurrentSong(state) {
  return get(state, 'jukebox.currentSong')
}
