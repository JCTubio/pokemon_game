import React from 'react'
import { connect } from 'react-redux'
import { shuffle, sample } from 'underscore'
import App from './App'
import pkmnJson from '../../resources/pokedex.json'
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
  cutTheMusic,
  gameFinished,
  playMusicForSGStarted,
} from '../../store/actions/Actions'
import {
  REGULAR_TURN_DURATION,
  QUICK_TURN_DURATION,
  TIME_TRIAL_TURN_DURATION,
} from './config'

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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerSelected: answer => {
      dispatch(answerSelected(answer))
      dispatch(rotomTalk(answer))
      setTimeout(
        function() {
          dispatch(nextTurn(getTurnData(pkmnJson)))
        },
        answer ? QUICK_TURN_DURATION : REGULAR_TURN_DURATION
      )
    },
    onTTAnswerSelected: answer => {
      dispatch(ttAnswerSelected(answer))
      setTimeout(function() {
        dispatch(nextTTTurn(getTurnData(pkmnJson)))
      }, TIME_TRIAL_TURN_DURATION)
    },
    onModeChanged: mode => {
      mode === STANDARD_MODE
        ? dispatch(resetStandardMode(getTurnData(pkmnJson))) &&
          dispatch(playMusicForSGStarted())
        : dispatch(resetTTMode())
      setTimeout(
        function() {
          mode === TIME_TRIAL && dispatch(nextTTTurn(getTurnData(pkmnJson)))
          mode === TIME_TRIAL && dispatch(playMusicForTTStarted())
          dispatch(changeGameMode(mode))
        },
        mode === STANDARD_MODE ? 0 : 2000
      )
    },
    onNaturalTimeCountdown: () => {
      dispatch(naturalTimeCountdown())
    },
    onGameFinished: () => {
      dispatch(cutTheMusic())
      dispatch(gameFinished())
      dispatch(ttGameFinished())
    },
    onGameInitializes: () => {
      dispatch(resetStandardMode(getTurnData(pkmnJson)))
    },
  }
}

function getTurnData(pkmnJson) {
  const allPkmn = pkmnJson.reduce(function(p, c, i) {
    return p.concat(c.ename)
  }, [])
  const fourPkmn = shuffle(allPkmn).slice(0, 4)
  const answer = sample(fourPkmn)

  return {
    options: fourPkmn,
    sprite: pkmnJson.find(pokemon => pokemon.ename === answer),
  }
}

class AppContainer extends React.Component {
  handleSelect = answer => {
    switch (this.props.gameMode) {
      case STANDARD_MODE:
        return this.props.onAnswerSelected(answer)
      case TIME_TRIAL:
        return this.props.onTTAnswerSelected(answer)
      default:
        return this.props.onAnswerSelected(answer)
    }
  }

  componentDidMount() {
    this.props.onGameInitializes()
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
