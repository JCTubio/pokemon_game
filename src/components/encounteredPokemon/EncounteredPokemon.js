import React from 'react'
import './EncounteredPokemon.css'

export default function EncounteredPokemon({ pokemonsEncountered }) {
  return (
    <div className="encounteredPokemonPanel">
      <h2 className="pokemonsEncounteredTitle">Pokemons Encountered</h2>
      <div className="scrollBarRemover">
        <ul className="encounteredPokemonList">
          {pokemonsEncountered.map((pokemon, i) => (
            <li key={i}>
              <img
                className="encounteredPokemon"
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
        </ul>
      </div>
    </div>
  )
}
