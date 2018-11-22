import get from 'lodash/get'

export default function getIsModalShowing(state) {
  return get(state, 'turn.isModalShowing')
}
