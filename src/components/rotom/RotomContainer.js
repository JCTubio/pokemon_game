import { connect } from 'react-redux'
import Rotom from './Rotom'
import getGameMode from '../../store/selectors/gameModeSelector'
import getTurnDuration from '../../store/selectors/turnDurationSelector'
import getRotomMessage from '../../store/selectors/rotomMessageSelector'
import getRotomMessageStyle from '../../store/selectors/rotomMessageStyleSelector'
import getIsRotomOnScreen from '../../store/selectors/isRotomOnScreenSelector'

function mapStateToProps(state) {
  return {
    isRotomOnScreen: getIsRotomOnScreen(state),
    rotomMessageStyle: getRotomMessageStyle(state),
    rotomMessage: getRotomMessage(state),
    turnDuration: getTurnDuration(state),
    gameMode: getGameMode(state),
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
