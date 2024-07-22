import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrophy, faDonate } from '@fortawesome/free-solid-svg-icons'

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

  /*
  const toggleLeaderboard = () => {
    isLeaderboardShowing ? hideLeaderboard() : showLeaderboard()
  }
  */

  return (
    <div className="container-fluid">
      <ResultsModal />
      <Leaderboard />
      <JukeboxContainer />
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