import React from 'react'
import './App.css'
import '../../resources/bootstrap.min.css'
import 'antd/dist/antd.css'
import Turn from '../answerPanel/Turn'
import JukeboxContainer from '../jukebox'
import { STANDARD_MODE, TIME_TRIAL } from '../../store/actions/Actions'

const App = ({
  turnData,
  highlight,
  handleSelect,
  turnNumber,
  clickedThisTurn,
  correctAnswers,
  bestStreak,
  pokedexGlow,
  onModeChanged,
  gameMode,
  timeLeft,
}) => {
  function gameModeChangeHandler(mode) {
    return gameMode === mode ? null : onModeChanged(mode)
  }

  return (
    <div className="container-fluid">
      <div className="header">
        <JukeboxContainer />
        <img
          src="../../images/whosthatpokemon.png"
          alt="title"
          className="headerImg"
        />
      </div>
      <div className="turnContainer">
        <div className="leftSpace" />
        <Turn
          key={turnNumber}
          {...turnData}
          highlight={highlight}
          handleSelect={handleSelect}
          clickedThisTurn={clickedThisTurn}
          pokedexGlow={pokedexGlow}
          correctAnswers={correctAnswers}
          bestStreak={bestStreak}
          gameMode={gameMode}
          timeLeft={timeLeft}
        />
        <div className="rightSpace" />
      </div>
      <div className="footer">
        <button
          className="toMainModeButton"
          onClick={() => gameModeChangeHandler(STANDARD_MODE)}
        >
          {'Standard\nMode'}
        </button>
        <button
          className="toTimeTrialButton"
          onClick={() => gameModeChangeHandler(TIME_TRIAL)}
        >
          {'Time\nTrial'}
        </button>
      </div>
    </div>
  )
}

export default App
