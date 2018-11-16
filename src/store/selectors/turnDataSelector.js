import { shuffle, sample } from 'underscore'
import pkmnJson from '../../resources/pokedex.json'

export default function getTurnData() {
  const allPkmn = pkmnJson.reduce(function(p, c, i) {
    return p.concat(c.ename)
  }, [])
  const fourPkmn = shuffle(allPkmn).slice(0, 4)
  const answer = sample(fourPkmn)

  return {
    options: fourPkmn,
    sprite: pkmnJson.find(pokemon => pokemon.ename === answer),
  }
}
