import React from 'react'
import PkmnOption from './PkmnOption'
import Sound from 'react-sound'
import './Turn.css'
import PokedexGlow from './pokedexGlow'
import RotomContainer from '../rotom/RotomContainer'

export default class Turn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spriteImg: null,
    }
  }

  validateAnswer = answer => {
    return this.props.onAnswerSelected(this.props.sprite.ename === answer)
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
      buttonHighlight,
      pokedexGlow,
      correctAnswers,
      bestStreak,
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
              buttonHighlight={buttonHighlight}
            />
          ))}
        </div>
        <RotomContainer />
        <div className="scoreBoard">
          <img
            src="/images/scorePanel.png"
            className="scorePanel"
            alt="scorePanel"
          />
          <div className="currentScoreLabel ">current</div>
          <div className="bestStreakLabel ">best</div>
          <div className="currentScore">{correctAnswers}</div>
          <div className="bestStreak">{bestStreak}</div>
        </div>
      </div>
    )
  }
}
