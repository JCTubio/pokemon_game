import get from 'lodash/get'

export default function getEncounteredPokemon(state) {
  return get(state, 'turn.pokemonsEncountered')
}
