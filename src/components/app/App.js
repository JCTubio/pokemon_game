import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faDonate } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'antd'

import Turn from '../turn/TurnContainer'
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
}) => {
  function gameModeChangeHandler(mode) {
    return gameMode === mode ? null : onModeChanged(mode, generations)
  }

  const toggleLeaderboard = () => {
    isLeaderboardShowing ? hideLeaderboard() : showLeaderboard()
  }

  return (
    <div className="container-fluid">
      <div className='pokedex-wrapper' >
        <div className='pokedex' >

      <ResultsModal />
      <Leaderboard />
      <IntroDialog />

      <div className="header" >
        <div className="buttons-container" >
        <JukeboxContainer />
        <Button
          type="primary"
          shape="circle"
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
          </div>
        </div>
      </div>
      <p className='hiddenMessage'>ROTATE YOUR PHONE</p>
    </div>
  )
}

export default App
