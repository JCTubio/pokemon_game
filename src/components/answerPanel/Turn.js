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
import { POKEDEX_GLOW_COLOR_INCORRECT } from '../app/config'
import ScoreBoard from './ScoreBoard'
import EncounteredPokemonContainer from '../encounteredPokemon/EncounteredPokemonContainer'
import GenerationFilter from '../generationFilter/GenerationFilter'

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
      isAnswerSelected,
      pokedexGlowColor,
      currentScore,
      highScore,
      gameMode,
      timeLeft,
      volume,
      onGenerationChanged,
    } = this.props

    return (
      <div className="turn">
        <EncounteredPokemonContainer />
        {isAnswerSelected && (
          <Sound
            url={
              pokedexGlowColor === POKEDEX_GLOW_COLOR_INCORRECT
                ? '/miscAudioFiles/Wrong_Answer.mp3'
                : '/pokemonCries/' +
                  this.props.sprite.id +
                  ' - ' +
                  this.props.sprite.ename +
                  '.wav'
            }
            playStatus={Sound.status.PLAYING}
            volume={volume}
          />
        )}
        <img src="/images/pokedex.png" className="pokedex" alt="pokedex" />
        {this.state.spriteImg ? (
          <img
            src={this.state.spriteImg}
            className={
              isAnswerSelected ? 'pkmnSprite pkmnSpriteShowing' : 'pkmnSprite'
            }
            alt="sprite"
            style={{
              filter: isAnswerSelected ? '' : 'brightness(0)',
            }}
          />
        ) : (
          <div />
        )}
        <PokedexGlow color={pokedexGlowColor} />
        <div className="respuestas">
          {options.map(name => (
            <PkmnOption
              key={name}
              name={name}
              onClick={this.validateAnswer}
              disabled={isAnswerSelected}
            />
          ))}
        </div>
        <RotomContainer />
        {gameMode === STANDARD_MODE && (
          <ScoreBoard
            panelToDisplay="/images/scorePanel.png"
            currentScore={currentScore}
            highScore={highScore}
            gameMode={gameMode}
            pokedexGlowColor={pokedexGlowColor}
          />
        )}
        {(gameMode === TIME_TRIAL || gameMode === GAME_FINISHED) && (
          <ScoreBoard
            panelToDisplay="/images/ttScorePanel.png"
            timeLeft={timeLeft}
            gameMode={gameMode}
            pokedexGlowColor={pokedexGlowColor}
          />
        )}
        <GenerationFilter onGenerationChanged={onGenerationChanged} />
      </div>
    )
  }
}
