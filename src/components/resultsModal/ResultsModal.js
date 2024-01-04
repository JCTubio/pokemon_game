import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrophy,
  faCheck
} from '@fortawesome/free-solid-svg-icons'

import Firebase from '../../firebase/FirebaseInstance'
import { STANDARD_MODE, TIME_TRIAL } from '../../store/actions/Actions'
import { checkIfQualified } from '../../utils/helpers'

import './resultsModal.css'

library.add(faTrophy)
library.add(faCheck)

export default function ResultsModal({
  isModalShowing,
  pokemonEncountered,
  onModeSelected,
  generations,
  dailyLeaderboard,
  currentScore,
  saveScore
}) {
  const [qualifies, setQualifies] = useState(false)
  const [hasSumbittedHighscore, setHasSumbittedHighscore] = useState(false)
  const [name, setName] = useState('')

  useEffect(
    () => {
      setHasSumbittedHighscore(false)
      setQualifies(checkIfQualified(currentScore, dailyLeaderboard))
    },
    [isModalShowing]
  )

  const handleNameChange = (e) => {
    if (e.target.value.length <= 3) {
      setName(e.target.value)
    }
  }

  const handleSubmitScore = () => {
    if (!hasSumbittedHighscore) {
      Firebase.saveScore({ name, score: currentScore})
      setHasSumbittedHighscore(true)
    }
  }

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
              {pokemonEncountered.map((pokemon, i) => (
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
      <div className="pkmnCampturedLabel">
        <h2 className="modalPokemonsEncounteredTitle">Pokemon captured: </h2>
        <p className="modalPokemonsEncounteredTitle">{currentScore}</p>
      </div>
      {qualifies ? (
        <div className="new-rank-container">
          <h2 className="new-rank-title">Congratulations!</h2>
          <p className="new-rank-explainer">
            You've made it into the leaderboard
          </p>
          <div className="new-rank-input-container">
            <label className="new-rank-label" htmlFor="name">
              Name:
            </label>
            <input type="text" name="name" className="new-rank-name-input" value={name} onChange={handleNameChange} />
          </div>
          <button className="new-rank-save-button" onClick={handleSubmitScore}>Enter</button>
          {hasSumbittedHighscore ? <FontAwesomeIcon style={{marginRight: '5px'}} color="yellow" icon={'trophy'} /> : null}
          {hasSumbittedHighscore ? <FontAwesomeIcon color="green" icon={'check'} /> : null}
        </div>
      ) : null}
      <div className="modalFooterButtons">
        <button
          id="modalMMButton"
          className="toMainModeButton"
          onClick={() => onModeSelected(STANDARD_MODE, generations)}
        >
          {'Standard\nMode'}
        </button>
        <button
          id="modalTTButton"
          className="toTimeTrialButton"
          onClick={() => onModeSelected(TIME_TRIAL, generations)}
        >
          {'Time\nTrial'}
        </button>
      </div>
    </div>
  )
}
