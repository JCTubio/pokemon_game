import { connect } from 'react-redux'
import Rotom from './Rotom'
//import { answerSelected, nextTurn } from "../../store/actions/Actions";

function mapStateToProps(state) {
  return {
    highlight: state.turn.highlight,
    rotomMessage: state.turn.rotomMessage,
    turnDuration: state.turn.turnDuration,
  }
}
/*
    pkmnJson,
    turnData: getTurnData(pkmnJson),
    highlight: false,
    turnNumber: 1,
    clickedThisTurn: false,
    bestStreak: 0,
    correctAnswers: 0,
    buttonHighlight: "",
    pokedexGlow: "rgb(0, 205, 255)",
    turnDuration: TURN_DURATION
    */

function mapDispatchToProps(dispatch) {
  return {
    /* onAnswerSelected: answer => {
      dispatch(answerSelected(answer));
      setTimeout(function() {
        dispatch(nextTurn());
      }, 1500);
    } */
  }
}

const RotomContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Rotom)

export default RotomContainer
