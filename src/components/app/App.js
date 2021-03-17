import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'antd'

import Turn from '../answerPanel/Turn'
import JukeboxContainer from '../jukebox'
import ResultsModal from '../resultsModal/ResultsModalContainer'
import Leaderboard from '../leaderboard/LeaderboardContainer'
import IntroDialog from '../introDialog/IntroDialogContainer'

import { STANDARD_MODE, TIME_TRIAL } from '../../store/actions/Actions'

import './App.css'
import '../../resources/bootstrap.min.css'
import 'antd/dist/antd.css'

library.add(faTrophy)

const App = ({
  turnData,
  isAnswerSelected,
  handleSelect,
  turnNumber,
  currentScore,
  highScore,
  pokedexGlowColor,
  onModeChanged,
  gameMode,
  timeLeft,
  volume,
  isModalShowing,
  onGenerationChanged,
  generations,
  isLeaderboardShowing,
  hideLeaderboard,
  showLeaderboard,
}) => {
  function gameModeChangeHandler(mode) {
    return gameMode === mode ? null : onModeChanged(mode, generations)
  }

  const toggleLeaderboard = () => {
    isLeaderboardShowing ? hideLeaderboard() : showLeaderboard()
  }

  return (
    <div className="container-fluid">
      <ResultsModal />
      <Leaderboard />
      <IntroDialog />
      <div className="header" style={isModalShowing ? { display: 'none' } : {}}>
        <div className="buttons-container" >
        <JukeboxContainer />
        <Button
          type="primary"
          shape="circle"
          size="large"
          onClick={toggleLeaderboard}
          className="leaderboards-button"
        >
          <FontAwesomeIcon icon={'trophy'} />
        </Button>
        </div>
        <img
          src="../../images/whosthatpokemon.png"
          alt="title"
          className="headerImg"
        />
      </div>
      <div
        className="turnContainer"
        style={isModalShowing ? { display: 'none' } : {}}
      >
        <div className="leftSpace" />
        <Turn
          key={turnNumber}
          {...turnData}
          isAnswerSelected={isAnswerSelected}
          handleSelect={handleSelect}
          pokedexGlowColor={pokedexGlowColor}
          currentScore={currentScore}
          highScore={highScore}
          gameMode={gameMode}
          timeLeft={timeLeft}
          volume={volume}
          onGenerationChanged={onGenerationChanged}
        />
        <div className="rightSpace" />
      </div>
      <div className="footer" style={isModalShowing ? { display: 'none' } : {}}>
        <button
          className="toMainModeButton"
          onClick={() => gameModeChangeHandler(STANDARD_MODE)}
          style={gameMode === TIME_TRIAL ? null : { display: 'none' }}
        >
          {'Standard\nMode'}
        </button>
        <button
          className="toTimeTrialButton"
          onClick={() => gameModeChangeHandler(TIME_TRIAL)}
          style={gameMode === STANDARD_MODE ? null : { display: 'none' }}
        >
          {'Time\nTrial'}
        </button>
      </div>
    </div>
  )
}

export default App
