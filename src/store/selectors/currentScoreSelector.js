import get from 'lodash/get'

export default function getCurrentScore(state) {
  return get(state, 'turn.currentScore')
}
