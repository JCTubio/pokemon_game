export const sortByScore = (objectArray) => {
  function compare(a, b) {
    const score1 = a.score
    const score2 = b.score
    let comparison = 0
    if (score1 > score2) {
      comparison = -1
    } else if (score1 < score2) {
      comparison = 1
    } 
    return comparison
  }
  return objectArray.sort(compare)
}

export const checkIfQualified = (score, leaderboard) => {
  if (leaderboard.length < 10) {
    return true
  } else {
    const index = leaderboard.findIndex((entry) => entry.score < score)
    if (index >= 0) {
      return true
    } 
  }
  return false
}