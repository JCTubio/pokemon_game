import { connect } from 'react-redux'
import Leaderboard from './Leaderboard'
import {
  hideLeaderboard
} from '../../store/actions/Actions'
import { getDailyLeaderboard, getMonthlyLeaderboard, getAllTimeLeaderboard, getIsLeaderboardShowing} from '../../store/selectors/leaderboardsSelectors'

function mapStateToProps(state) {
  return {
    dailyLeaderboard: getDailyLeaderboard(state),
    monthlyLeaderboard: getMonthlyLeaderboard(state),
    allTimeLeaderboard: getAllTimeLeaderboard(state),
    isLeaderboardShowing: getIsLeaderboardShowing(state),
  }
}


function mapDispatchToProps(dispatch) {
  return {
    hideLeaderboard: () => {
      dispatch(hideLeaderboard())
    }
  }
}

const LeaderboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard)

export default LeaderboardContainer
