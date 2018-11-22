import get from 'lodash/get'

export default function getHighScore(state) {
  return get(state, 'turn.highScore')
}
