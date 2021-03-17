import React from 'react'
import { connect } from 'react-redux'
import Firebase from '../../firebase/FirebaseInstance'

import App from './App'
import generateTurnData from '../../store/selectors/turnDataHelper'
import {
  answerSelected,
  ttAnswerSelected,
  nextTurn,
  nextTTTurn,
  changeGameMode,
  STANDARD_MODE,
  resetStandardMode,
  resetTTMode,
  TIME_TRIAL,
  playMusicForTTStarted,
  rotomTalk,
  naturalTimeCountdown,
  ttGameFinished,
  stopTheMusic,
  gameFinished,
  playMusicForSGStarted,
  showModal,
  playTheMusic,
  changeGenerations,
  showLeaderboard,
  hideLeaderboard
} from '../../store/actions/Actions'
import getGameMode from '../../store/selectors/gameModeSelector'
import getVolume from '../../store/selectors/volumeSelector'
import getTurnData from '../../store/selectors/turnDataSelector'
import getIsAnswerSelected from '../../store/selectors/isAnswerSelectedSelector'
import getTurnNumber from '../../store/selectors/turnNumberSelector'
import getTurnDuration from '../../store/selectors/turnDurationSelector'
import getCurrentScore from '../../store/selectors/currentScoreSelector'
import getHighScore from '../../store/selectors/getHighScore'
import getPokedexGlowColor from '../../store/selectors/pokedexGlowColorSelector'
import getTimeLeft from '../../store/selectors/timeLeftSelector'
import getIsTimerActive from '../../store/selectors/isTimerActiveSelector'
import getIsModalShowing from '../../store/selectors/isModalShowingSelector'
import getGenerations from '../../store/selectors/generationsSelector'
import {
  REGULAR_TURN_DURATION,
  QUICK_TURN_DURATION,
  TIME_TRIAL_TURN_DURATION,
} from './config'
import {
  getChillSong,
  getIntenseSong,
  getCreditsSong,
} from '../../store/selectors/musicHelper'
import { getIsLeaderboardShowing } from '../../store/selectors/leaderboardsSelectors'

function mapStateToProps(state) {
  return {
    gameMode: getGameMode(state),
    volume: getVolume(state),
    turnData: getTurnData(state),
    isAnswerSelected: getIsAnswerSelected(state),
    turnNumber: getTurnNumber(state),
    turnDuration: getTurnDuration(state),
    currentScore: getCurrentScore(state),
    highScore: getHighScore(state),
    pokedexGlowColor: getPokedexGlowColor(state),
    timeLeft: getTimeLeft(state),
    isTimerActive: getIsTimerActive(state),
    isModalShowing: getIsModalShowing(state),
    generations: getGenerations(state),
    isLeaderboardShowing: getIsLeaderboardShowing(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showLeaderboard: () => {
      dispatch(showLeaderboard())
    },
    hideLeaderboard: () => {
      dispatch(hideLeaderboard())
    },
    onAnswerSelected: (answer, generations) => {
      dispatch(answerSelected(answer))
      dispatch(rotomTalk(answer))
      setTimeout(
        function() {
          dispatch(nextTurn(generateTurnData(generations)))
        },
        answer ? QUICK_TURN_DURATION : REGULAR_TURN_DURATION
      )
    },
    onTTAnswerSelected: (answer, generations) => {
      dispatch(ttAnswerSelected(answer))
      setTimeout(function() {
        dispatch(nextTTTurn(generateTurnData(generations)))
      }, TIME_TRIAL_TURN_DURATION)
    },
    onModeChanged: (mode, generations) => {
      mode === STANDARD_MODE
        ? dispatch(resetStandardMode(generateTurnData(generations))) &&
          dispatch(playMusicForSGStarted(getChillSong())) &&
          dispatch(playTheMusic())
        : dispatch(resetTTMode())
      setTimeout(
        function() {
          mode === TIME_TRIAL &&
            dispatch(nextTTTurn(generateTurnData(generations)))
          mode === TIME_TRIAL &&
            dispatch(playMusicForTTStarted(getIntenseSong()))
          mode === TIME_TRIAL && dispatch(playTheMusic())
          dispatch(changeGameMode(mode))
        },
        mode === STANDARD_MODE ? 0 : 2000
      )
    },
    onNaturalTimeCountdown: () => {
      dispatch(naturalTimeCountdown())
    },
    onGameFinished: () => {
      dispatch(stopTheMusic())
      dispatch(gameFinished())
      dispatch(ttGameFinished())
      dispatch(showModal())
    },
    onGameInitializes: generations => {
      dispatch(resetStandardMode(generateTurnData(generations)))
      dispatch(playMusicForSGStarted(getChillSong()))
      dispatch(playTheMusic())
    },
    onGenerationChanged: generationsFromFilter => {
      dispatch(changeGenerations(generationsFromFilter))
    },
  }
}

class AppContainer extends React.Component {
  handleSelect = answer => {
    switch (this.props.gameMode) {
      case STANDARD_MODE:
        return this.props.onAnswerSelected(answer, this.props.generations)
      case TIME_TRIAL:
        return this.props.onTTAnswerSelected(answer, this.props.generations)
      default:
        return this.props.onAnswerSelected(answer, this.props.generations)
    }
  }

  componentDidMount() {
    this.props.onGameInitializes(this.props.generations)
    this.timerID = setInterval(() => this.tick(), 1000)
    Firebase.getLeaderboards()
    window.soundManager.setup({debugMode: false})
  }

  tick() {
    return this.props.timeLeft > 0
      ? this.props.gameMode === TIME_TRIAL
        ? this.props.onNaturalTimeCountdown()
        : null
      : this.props.onGameFinished()
  }

  render() {
    return <App {...this.props} handleSelect={this.handleSelect} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
