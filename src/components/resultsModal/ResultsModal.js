import React from 'react'
import './resultsModal.css'
import { STANDARD_MODE, TIME_TRIAL } from '../../store/actions/Actions'

export default function ResultsModal({
  isModalShowing,
  pokemonsEncountered,
  timeSurvivedInTT,
  onModeSelected,
}) {
  return (
    <div
      className="resultsModal"
      style={isModalShowing ? {} : { display: 'none' }}
    >
      <div className="modalPkmnEncounteredList">
        <h2 className="modalPokemonsEncounteredTitle">Pokemon Encountered</h2>
        <div className="modalEncounteredPokemonPanel">
          <div className="modalScrollBarRemover">
            <ul className="modalEncounteredPokemonList">
              {pokemonsEncountered.map((pokemon, i) => (
                <li key={i}>
                  <img
                    className="modalEncounteredPokemon"
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
      </div>
      <div className="timeSurvivedDisplay">
        <h2 className="modalPokemonsEncounteredTitle">Time survived: </h2>
        <p className="modalPokemonsEncounteredTitle">{timeSurvivedInTT}s</p>
      </div>
      <div className="modalFooterButtons">
        <button
          id="modalMMButton"
          className="toMainModeButton"
          onClick={() => onModeSelected(STANDARD_MODE)}
        >
          {'Standard\nMode'}
        </button>
        <button
          id="modalTTButton"
          className="toTimeTrialButton"
          onClick={() => onModeSelected(TIME_TRIAL)}
        >
          {'Time\nTrial'}
        </button>
      </div>
    </div>
  )
}
