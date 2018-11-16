import { connect } from 'react-redux'
import ResultsModal from './ResultsModal'
import {
  STANDARD_MODE,
  TIME_TRIAL,
  resetStandardMode,
  nextTTTurn,
  playMusicForTTStarted,
  hideModal,
  changeGameMode,
  resetTTMode,
  playTheMusic,
  playMusicForSGStarted,
} from '../../store/actions/Actions'
import {
  getChillSong,
  getIntenseSong,
  getCreditsSong,
} from '../../store/selectors/musicSelector'
import getTurnData from '../../store/selectors/turnDataSelector'

function mapStateToProps(state) {
  return {
    isModalShowing: state.turn.isModalShowing,
    pokemonsEncountered: state.turn.pokemonsEncountered,
    timeSurvivedInTT: state.turn.timeSurvivedInTT,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onModeSelected: mode => {
      if (mode === STANDARD_MODE) {
        dispatch(resetStandardMode(getTurnData()))
        dispatch(playMusicForSGStarted(getChillSong()))
        dispatch(playTheMusic())
        dispatch(hideModal())
        dispatch(changeGameMode(mode))
      } else if (mode === TIME_TRIAL) {
        dispatch(hideModal())
        dispatch(resetTTMode())
        setTimeout(function() {
          dispatch(nextTTTurn(getTurnData()))
          dispatch(playMusicForTTStarted(getIntenseSong()))
          dispatch(playTheMusic())
          dispatch(changeGameMode(mode))
        }, 2000)
      }
    },
  }
}

const ResultsModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsModal)

export default ResultsModalContainer
