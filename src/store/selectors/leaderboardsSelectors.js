import get from 'lodash/get'

export function getDailyLeaderboard(state) {
  return get(state, 'leaderboards.daily')
}

export function getMonthlyLeaderboard(state) {
  return get(state, 'leaderboards.monthly')
}

export function getAllTimeLeaderboard(state) {
  return get(state, 'leaderboards.allTime')
}

export function getIsLeaderboardShowing(state) {
  return get(state, 'leaderboards.isShowing')
}