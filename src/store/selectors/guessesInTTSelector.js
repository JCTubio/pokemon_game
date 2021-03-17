import get from 'lodash/get'

export default function getGuessesInTT(state) {
  return get(state, 'turn.guessesInTT')
}
