import get from 'lodash/get'

export default function getRotomMessage(state) {
  return get(state, 'turn.rotomMessage')
}
