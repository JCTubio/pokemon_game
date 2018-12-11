import get from 'lodash/get'

export default function getIsTimerActive(state) {
  return get(state, 'turn.isTimerActive')
}
