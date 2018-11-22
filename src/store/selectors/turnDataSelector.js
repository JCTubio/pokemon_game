import get from 'lodash/get'

export default function getTurnData(state) {
  return get(state, 'turn.turnData')
}
