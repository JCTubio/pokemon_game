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
  playMusicForSGStarted
} from '../../store/actions/Actions'
import {
  getChillSong,
  getIntenseSong,
  getCreditsSong,
} from '../../store/selectors/musicHelper'
import getTurnData from '../../store/selectors/turnDataHelper'
import getIsModalShowing from '../../store/selectors/isModalShowingSelector'
import getEncounteredPokemon from '../../store/selectors/pokemonEncounteredSelector'
import getGenerations from '../../store/selectors/generationsSelector'
import getGuessesInTT from '../../store/selectors/guessesInTTSelector'
import getCurrentScore from '../../store/selectors/currentScoreSelector'
import { getDailyLeaderboard } from '../../store/selectors/leaderboardsSelectors'


function mapStateToProps(state) {
  return {
    isModalShowing: getIsModalShowing(state),
    pokemonEncountered: getEncounteredPokemon(state),
    guessesInTT: getGuessesInTT(state),
    generations: getGenerations(state),
    currentScore: getCurrentScore(state),
    dailyLeaderboard: getDailyLeaderboard(state),
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onModeSelected: (mode, generations) => {
      if (mode === STANDARD_MODE) {
        dispatch(resetStandardMode(getTurnData(generations)))
        dispatch(playMusicForSGStarted(getChillSong()))
        dispatch(playTheMusic())
        dispatch(hideModal())
        dispatch(changeGameMode(mode))
      } else if (mode === TIME_TRIAL) {
        dispatch(hideModal())
        dispatch(resetTTMode())
        setTimeout(function() {
          dispatch(nextTTTurn(getTurnData(generations)))
          dispatch(playMusicForTTStarted(getIntenseSong()))
          dispatch(playTheMusic())
          dispatch(changeGameMode(mode))
        }, 2000)
      }
    }
  }
}

const ResultsModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsModal)

export default ResultsModalContainer
