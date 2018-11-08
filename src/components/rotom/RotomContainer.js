import { connect } from 'react-redux'
import Rotom from './Rotom'

function mapStateToProps(state) {
  return {
    showRotomMessage: state.turn.showRotomMessage,
    rotomMessageStyle: state.turn.rotomMessageStyle,
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
