import pkmnJson from '../../resources/pokedex.json'
import { shuffle, sample } from 'underscore'

export default function getTurnData(generations) {
  const allPkmn = filterJson(pkmnJson, generations).reduce(function(p, c, i) {
    return p.concat(c.ename)
  }, [])
  const fourPkmn = shuffle(allPkmn).slice(0, 4)
  const answer = sample(fourPkmn)
  return {
    options: fourPkmn,
    sprite: pkmnJson.find(pokemon => pokemon.ename === answer),
  }
}

function filterJson(completePkmnJson, generationsArray = []) {
  let filteredJson = []
  generationsArray.sort()
  generationsArray.forEach(generation => {
    filteredJson = filteredJson.concat(
      filterGeneration(completePkmnJson, generation)
    )
  })
  return filteredJson.length === 0 ? completePkmnJson : filteredJson
}

function filterGeneration(completePkmnJson, generation) {
  switch (generation) {
    case 1:
      return completePkmnJson.slice(0, 151)
    case 2:
      return completePkmnJson.slice(151, 251)
    case 3:
      return completePkmnJson.slice(251, 386)
    case 4:
      return completePkmnJson.slice(386, 494)
    case 5:
      return completePkmnJson.slice(494, 649)
    case 6:
      return completePkmnJson.slice(649, 721)
    //case 7:
    //return completePkmnJson.slice(721, 807) NOT YET ADDED TO JSON
    default:
      return []
  }
}
