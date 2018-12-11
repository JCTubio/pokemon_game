import get from 'lodash/get'

export default function getIsAnswerSelected(state) {
  return get(state, 'turn.isAnswerSelected')
}
