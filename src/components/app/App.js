import React from 'react'
import './App.css'
import '../../resources/bootstrap.min.css'
import 'antd/dist/antd.css'
import Turn from '../answerPanel/Turn'
import JukeboxContainer from '../jukebox'

const App = ({
  turnData,
  highlight,
  onAnswerSelected,
  turnNumber,
  clickedThisTurn,
  correctAnswers,
  bestStreak,
  buttonHighlight,
  pokedexGlow,
}) => {
  return (
    <div className="container-fluid">
      <div className="header">
        <JukeboxContainer />
        <img
          src="../../images/whosthatpokemon.png"
          alt="title"
          className="headerImg"
        />
      </div>
      <div className="turnContainer">
        <div className="leftSpace" />
        <Turn
          key={turnNumber}
          {...turnData}
          highlight={highlight}
          onAnswerSelected={onAnswerSelected}
          clickedThisTurn={clickedThisTurn}
          buttonHighlight={buttonHighlight}
          pokedexGlow={pokedexGlow}
          correctAnswers={correctAnswers}
          bestStreak={bestStreak}
        />
        <div className="rightSpace" />
      </div>
    </div>
  )
}

export default App
