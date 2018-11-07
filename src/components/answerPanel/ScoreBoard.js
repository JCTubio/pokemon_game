import React from 'react'
import {
  STANDARD_MODE,
  TIME_TRIAL,
  GAME_FINISHED,
} from '../../store/actions/Actions'

export default function ScoreBoard({
  panelToDisplay,
  correctAnswers = 0,
  bestStreak = 0,
  timeLeft = 0,
  gameMode,
}) {
  return (
    <div className="scoreBoard">
      <img src={panelToDisplay} className="scorePanel" alt="scorePanel" />
      {gameMode === STANDARD_MODE && (
        <div className="currentScoreLabel ">current</div>
      )}
      {gameMode === STANDARD_MODE && (
        <div className="bestStreakLabel ">best</div>
      )}
      {gameMode === STANDARD_MODE && (
        <div className="currentScore">{correctAnswers}</div>
      )}
      {gameMode === STANDARD_MODE && (
        <div className="bestStreak">{bestStreak}</div>
      )}
      {(gameMode === TIME_TRIAL || gameMode === GAME_FINISHED) && (
        <div className="timeLeftLabel">Time Left:</div>
      )}
      {(gameMode === TIME_TRIAL || gameMode === GAME_FINISHED) && (
        <div className="timeLeft">
          <span className="number">{timeLeft / 1000}</span>
          <span className="unit">s</span>
        </div>
      )}
    </div>
  )
}
