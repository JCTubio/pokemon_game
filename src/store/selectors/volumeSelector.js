import get from 'lodash/get'

export default function getVolume(state) {
  return get(state, 'jukebox.volume')
}
