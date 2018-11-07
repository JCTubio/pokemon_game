import { connect } from 'react-redux'
import Rotom from './Rotom'
//import { answerSelected, nextTurn } from "../../store/actions/Actions";

function mapStateToProps(state) {
  return {
    showRotomMessage: state.turn.showRotomMessage,
    rotomMessage: state.turn.rotomMessage,
    turnDuration: state.turn.turnDuration,
    gameMode: state.app.gameMode,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

const RotomContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Rotom)

export default RotomContainer
