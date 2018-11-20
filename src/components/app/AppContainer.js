import React from 'react'
import { connect } from 'react-redux'
import App from './App'
import getTurnData from '../../store/selectors/turnDataSelector'
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
} from '../../store/actions/Actions'
import {
  REGULAR_TURN_DURATION,
  QUICK_TURN_DURATION,
  TIME_TRIAL_TURN_DURATION,
} from './config'
import {
  getChillSong,
  getIntenseSong,
  getCreditsSong,
} from '../../store/selectors/musicSelector'

function mapStateToProps(state) {
  return {
    gameMode: state.app.gameMode,
    volume: state.jukebox.volume,
    turnData: state.turn.turnData,
    isAnswerSelected: state.turn.isAnswerSelected,
    turnNumber: state.turn.turnNumber,
    turnDuration: state.turn.turnDuration,
    currentScore: state.turn.currentScore,
    highScore: state.turn.highScore,
    pokedexGlowColor: state.turn.pokedexGlowColor,
    timeLeft: state.turn.timeLeft,
    isTimerActive: state.turn.timeLeft,
    isModalShowing: state.turn.isModalShowing,
    generations: state.turn.generations,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerSelected: (answer, generations) => {
      dispatch(answerSelected(answer))
      dispatch(rotomTalk(answer))
      setTimeout(
        function() {
          dispatch(nextTurn(getTurnData(generations)))
        },
        answer ? QUICK_TURN_DURATION : REGULAR_TURN_DURATION
      )
    },
    onTTAnswerSelected: (answer, generations) => {
      dispatch(ttAnswerSelected(answer))
      setTimeout(function() {
        dispatch(nextTTTurn(getTurnData(generations)))
      }, TIME_TRIAL_TURN_DURATION)
    },
    onModeChanged: (mode, generations) => {
      mode === STANDARD_MODE
        ? dispatch(resetStandardMode(getTurnData(generations))) &&
          dispatch(playMusicForSGStarted(getChillSong())) &&
          dispatch(playTheMusic())
        : dispatch(resetTTMode())
      setTimeout(
        function() {
          mode === TIME_TRIAL && dispatch(nextTTTurn(getTurnData(generations)))
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
      dispatch(resetStandardMode(getTurnData(generations)))
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
