import get from 'lodash/get'

export default function getRotomMessageStyle(state) {
  return get(state, 'turn.rotomMessageStyle')
}
