import get from 'lodash/get'

export default function getTurnNumber(state) {
  return get(state, 'turn.turnNumber')
}
