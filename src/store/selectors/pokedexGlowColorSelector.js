import get from 'lodash/get'

export default function getPokedexGlowColor(state) {
  return get(state, 'turn.pokedexGlowColor')
}
