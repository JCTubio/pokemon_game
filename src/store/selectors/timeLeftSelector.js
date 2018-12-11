import get from 'lodash/get'

export default function getTimeLeft(state) {
  return get(state, 'turn.timeLeft')
}
