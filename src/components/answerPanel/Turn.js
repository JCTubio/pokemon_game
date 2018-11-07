import React from 'react'
import PkmnOption from './PkmnOption'
import Sound from 'react-sound'
import './Turn.css'
import PokedexGlow from './pokedexGlow'
import RotomContainer from '../rotom/RotomContainer'
import {
  STANDARD_MODE,
  TIME_TRIAL,
  GAME_FINISHED,
} from '../../store/actions/Actions'
import ScoreBoard from './ScoreBoard'

export default class Turn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spriteImg: null,
    }
  }

  validateAnswer = answer => {
    return this.props.handleSelect(this.props.sprite.ename === answer)
  }

  componentDidMount = () => {
    this.getPkmnSprite()
  }

  getPkmnSprite = () => {
    this.setState({
      spriteImg:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
        parseInt(this.props.sprite.id, 10) +
        '.png',
    })
  }

  render() {
    const {
      options,
      highlight,
      clickedThisTurn,
      pokedexGlow,
      correctAnswers,
      bestStreak,
      gameMode,
      timeLeft,
    } = this.props

    return (
      <div className="turn">
        {highlight && (
          <Sound
            url={
              '/pokemonCries/' +
              this.props.sprite.id +
              ' - ' +
              this.props.sprite.ename +
              '.wav'
            }
            playStatus={Sound.status.PLAYING}
            volume={50}
          />
        )}
        <img src="/images/pokedex.png" className="pokedex" alt="pokedex" />
        {this.state.spriteImg ? (
          <img
            src={this.state.spriteImg}
            className={
              highlight ? 'pkmnSprite pkmnSpriteShowing' : 'pkmnSprite'
            }
            alt="sprite"
            style={{
              filter: highlight ? '' : 'brightness(0)',
            }}
          />
        ) : (
          <div />
        )}
        <PokedexGlow color={pokedexGlow} />
        <div className="respuestas">
          {options.map(name => (
            <PkmnOption
              key={name}
              name={name}
              onClick={this.validateAnswer}
              disabled={clickedThisTurn}
            />
          ))}
        </div>
        <RotomContainer />
        {gameMode === STANDARD_MODE && (
          <ScoreBoard
            panelToDisplay="/images/scorePanel.png"
            correctAnswers={correctAnswers}
            bestStreak={bestStreak}
            gameMode={gameMode}
          />
        )}
        {(gameMode === TIME_TRIAL || gameMode === GAME_FINISHED) && (
          <ScoreBoard
            panelToDisplay="/images/ttScorePanel.png"
            timeLeft={timeLeft}
            gameMode={gameMode}
          />
        )}
      </div>
    )
  }
}
