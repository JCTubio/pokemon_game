import get from 'lodash/get'

export default function getIsRotomOnScreen(state) {
  return get(state, 'turn.isRotomOnScreen')
}
