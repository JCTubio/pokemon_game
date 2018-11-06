import React from 'react'
import { connect } from 'react-redux'
import App from './App'
import {
  answerSelected,
  ttAnswerSelected,
  nextTurn,
  changeGameMode,
  STANDARD_MODE,
  resetStandardMode,
  resetTTMode,
  TIME_TRIAL,
} from '../../store/actions/Actions'
import {
  REGULAR_TURN_DURATION,
  QUICK_TURN_DURATION,
  TIME_TRIAL_TURN_DURATION,
} from './config'

function mapStateToProps(state) {
  return {
    gameMode: state.app.gameMode,
    turnData: state.turn.turnData,
    highlight: state.turn.highlight,
    turnNumber: state.turn.turnNumber,
    turnDuration: state.turn.turnDuration,
    clickedThisTurn: state.turn.clickedThisTurn,
    correctAnswers: state.turn.correctAnswers,
    bestStreak: state.turn.bestStreak,
    pokedexGlow: state.turn.pokedexGlow,
    timeLeft: state.turn.timeLeft,
    timerActive: state.turn.timeLeft,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerSelected: answer => {
      console.log(answer)
      dispatch(answerSelected(answer))
      setTimeout(function() {
        dispatch(nextTurn())
      }, answer ? QUICK_TURN_DURATION : REGULAR_TURN_DURATION)
    },
    onTTAnswerSelected: answer => {
      dispatch(ttAnswerSelected(answer))
      setTimeout(function() {
        dispatch(nextTurn())
      }, TIME_TRIAL_TURN_DURATION)
    },
    onModeChanged: mode => {
      dispatch(changeGameMode(mode))
      mode === STANDARD_MODE
        ? dispatch(resetStandardMode())
        : dispatch(resetTTMode())
    },
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

  render() {
    return <App {...this.props} handleSelect={this.handleSelect} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
