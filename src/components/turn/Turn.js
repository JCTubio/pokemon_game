import React from 'react'
import PkmnOption from './answerPanel/PkmnOption'
import Sound from 'react-sound'
import './Turn.css'
import PokedexGlow from './answerPanel/pokedexGlow'
import RotomContainer from '../rotom/RotomContainer'
import {
  STANDARD_MODE,
  TIME_TRIAL,
  GAME_FINISHED,
} from '../../store/actions/Actions'
import { POKEDEX_GLOW_COLOR_INCORRECT } from '../app/config'

import ScoreBoard from './answerPanel/ScoreBoard'
import PokeModal from '../pokeModal/PokeModalContainer'

export default class Turn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spriteImg: null,
      modalDisplaying: false
    }
    this.handleModalBackButtonClicked = this.handleModalBackButtonClicked.bind(this)
    this.handleModalToggleClicked = this.handleModalToggleClicked.bind(this)
    this.gameModeChangeHandler = this.gameModeChangeHandler.bind(this)
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

  handleModalBackButtonClicked = () => {
    this.setState({
      modalDisplaying: false
    })
  }

  handleModalToggleClicked = () => {
    const  newValue = !this.state.modalDisplaying

    this.setState({
      modalDisplaying: newValue
    })
  }

  gameModeChangeHandler = () => {
    return this.props.gameMode === TIME_TRIAL ? this.props.onModeSelected(STANDARD_MODE, this.props.generations) : this.props.onModeSelected(TIME_TRIAL, this.props.generations)
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
        <button className='menuToggle' onClick={this.handleModalToggleClicked} />
        <button className='timeTrialToggle' onClick={this.gameModeChangeHandler} />
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
        <PokeModal handleModalBackButtonClicked={this.handleModalBackButtonClicked} onGenerationChanged={onGenerationChanged}  displaying={this.state.modalDisplaying} />
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
      </div>
    )
  }
}
