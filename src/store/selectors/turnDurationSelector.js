import get from 'lodash/get'

export default function getTurnDuration(state) {
  return get(state, 'turn.turnDuration')
}
