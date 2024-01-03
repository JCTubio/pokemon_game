import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTrophy,
  faCheck
} from '@fortawesome/free-solid-svg-icons'

import GenerationFilter from '../generationFilter/GenerationFilter'

import './pokeModal.css'

library.add(faTrophy)
library.add(faCheck)

export default function PokeModal({
  displaying,
  pokemonEncountered,
}) {

  console.log(pokemonEncountered)

  return (
    <div
      className="pokeModal"
      style={displaying ? {} : { display: 'none' }}
    >
        <div className='pokemonEncountered'>
        {pokemonEncountered ? <ul className="pokemonEncounteredList">
                  {pokemonEncountered.map((pokemon, i) => (
                    <li key={i}>
                      <img
                        className="pokemonEncounteredImg"
                        src={pokemon.pokemon}
                        alt="encounteredPKMN"
                        style={
                          pokemon.correct
                            ? {
                                backgroundColor: 'rgba(137, 255, 20, 0.69)',
                              }
                            : { backgroundColor: 'rgba(255, 20, 20, 0.69)' }
                        }
                      />
                    </li>
                  ))}
                </ul> : null}
        </div>
      <div className="menu">
        <GenerationFilter />
      </div>
    </div>
  )
}
