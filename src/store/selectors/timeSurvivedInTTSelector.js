import get from 'lodash/get'

export default function getTimeSurvivedInTT(state) {
  return get(state, 'turn.getTimeSurvivedInTT')
}
