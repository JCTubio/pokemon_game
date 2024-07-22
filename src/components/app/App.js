import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faDonate } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'antd'

import Game from '../answerPanel/Game'
import JukeboxContainer from '../jukebox'
import ResultsModal from '../resultsModal/ResultsModalContainer'
import Leaderboard from '../leaderboard/LeaderboardContainer'
import IntroDialog from '../introDialog/IntroDialogContainer'

import { STANDARD_MODE, TIME_TRIAL } from '../../store/actions/Actions'

import './App.css'
import '../../resources/bootstrap.min.css'
import 'antd/dist/antd.css'

library.add(faTrophy)
library.add(faDonate)

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
  approveConsent
}) => {
  function gameModeChangeHandler(mode) {
    return gameMode === mode ? null : onModeChanged(mode, generations)
  }

  const toggleLeaderboard = () => {
    isLeaderboardShowing ? hideLeaderboard() : showLeaderboard()
  }

  return (
    <div className="container-fluid">
      <IntroDialog  onOkSelected={approveConsent} onNoSelected={null} />
      <Game
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
    </div>
  )
}

export default App

  /*
  return (
    <div className="container-fluid">
      <ResultsModal />
      <Leaderboard />
      
      <div className="header" style={{ display: 'none' }}>
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
        <Button
          type="primary"
          shape="circle"
          size="large"
          href="https://streamlabs.com/iamjaysee/tip"
          target="_blank"
          className="donation-button"
        >
          <FontAwesomeIcon icon={'donate'} />
        </Button>
        </div>
      </div>
      <div
        className="turnContainer"
        style={isModalShowing ? { display: 'none' } : {}}
      >
        <Game
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
      </div>
      <div className="footer" style={{ display: 'none' }}>
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
*/