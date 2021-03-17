import React, { useEffect, useState } from 'react'

import leaderboardConstants from '../../constants/leaderboards'

import './leaderboard.css'

export default function Leaderboard({
  dailyLeaderboard,
  monthlyLeaderboard,
  allTimeLeaderboard,
  isLeaderboardShowing,
  hideLeaderboard,
}) {
  const [currentLeaderboard, setCurrentLeaderboard] = useState(
    leaderboardConstants.DAILY
  )

  const leaderboards = {
    [leaderboardConstants.DAILY]: dailyLeaderboard,
    [leaderboardConstants.MONTHLY]: monthlyLeaderboard,
    [leaderboardConstants.ALLTIME]: allTimeLeaderboard,
  }
  
  return (
    <div
      className="leaderboard-shadow"
      onClick={() => hideLeaderboard()}
      style={isLeaderboardShowing ? {} : { display: 'none' }}
    >
      <div className="leaderboard-modal" onClick={(e) => e.stopPropagation()}>
        <div className="leaderboard">
          <div
            className="leaderboard-entry"
            style={{marginBottom: '10px'}}
          >
            <p className="leaderboard-entry-rank">Rank</p>
            <p className="leaderboard-entry-name">Player</p>
            <p className="leaderboard-entry-score">Score</p>
          </div>
          {leaderboards[currentLeaderboard].map((entry, i) => {
            return (
              <div
                className="leaderboard-entry"
                key={`${entry.name}-${entry.score}`}
              >
                <p className="leaderboard-entry-rank">{i + 1}</p>
                <p className="leaderboard-entry-name">{entry.name}</p>
                <p className="leaderboard-entry-score">{entry.score}</p>
              </div>
            )
          })}
        </div>
        <div className="leaderboard-buttons-container">
          <button
            className="leaderboard-button"
            onClick={() => setCurrentLeaderboard(leaderboardConstants.DAILY)}
          >
            Daily
          </button>
          <button
            className="leaderboard-button"
            onClick={() => setCurrentLeaderboard(leaderboardConstants.MONTHLY)}
          >
            Monthly
          </button>
          <button
            className="leaderboard-button"
            onClick={() => setCurrentLeaderboard(leaderboardConstants.ALLTIME)}
          >
            All-Time
          </button>
        </div>
      </div>
    </div>
  )
}
