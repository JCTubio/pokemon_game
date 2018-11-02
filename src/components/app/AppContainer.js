import { connect } from 'react-redux'
import App from './App'
import { answerSelected, nextTurn } from '../../store/actions/Actions'
import { REGULAR_TURN_DURATION, QUICK_TURN_DURATION } from './config'

function mapStateToProps(state) {
  return {
    turnData: state.turn.turnData,
    highlight: state.turn.highlight,
    turnNumber: state.turn.turnNumber,
    turnDuration: state.turn.turnDuration,
    clickedThisTurn: state.turn.clickedThisTurn,
    correctAnswers: state.turn.correctAnswers,
    bestStreak: state.turn.bestStreak,
    buttonHighlight: state.turn.buttonHighlight,
    pokedexGlow: state.turn.pokedexGlow,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerSelected: answer => {
      dispatch(answerSelected(answer))
      setTimeout(function() {
        dispatch(nextTurn())
      }, answer ? QUICK_TURN_DURATION : REGULAR_TURN_DURATION)
    },
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
