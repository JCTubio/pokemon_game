import get from 'lodash/get'

export default function getGenerations(state) {
  return get(state, 'turn.generations')
}
