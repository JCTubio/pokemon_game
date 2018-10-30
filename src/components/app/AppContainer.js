import { connect } from "react-redux";
import App from "./App";
import { answerSelected, nextTurn } from "../../store/actions/Actions";

function mapStateToProps(state) {
  return {
    turnData: state.turn.turnData,
    highlight: state.turn.highlight,
    turnNumber: state.turn.turnNumber,
    clickedThisTurn: state.turn.clickedThisTurn,
    correctAnswers: state.turn.correctAnswers,
    wrongAnswers: state.turn.wrongAnswers,
    buttonHighlight: state.turn.buttonHighlight
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerSelected: answer => {
      dispatch(answerSelected(answer));
      setTimeout(function() {
        dispatch(nextTurn());
      }, 1000);
    }
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
