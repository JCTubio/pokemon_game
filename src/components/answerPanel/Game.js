import React, { useEffect, useState } from 'react'
import Sound from 'react-sound'

import PkmnOption from './PkmnOption'
import './Game.css'
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
import Display from '../display/Display'

import { useWindowDimensions } from '../../hooks'

const Game = props => {

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
  } = props

  const [spriteImg, updateSprite] = useState()

  useEffect(() => {
    getPkmnSprite()
  }, []);

  const validateAnswer = answer => {
    return props.handleSelect(props.sprite.ename === answer)
  }

  const getPkmnSprite = () => {
    updateSprite(
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
        parseInt(props.sprite.id, 10) +
        '.png',
    )
  }

  const windowDimensions = useWindowDimensions()
  const totalDimensions = windowDimensions.width + windowDimensions.height
  console.log("windowDimensions: " + windowDimensions)
  console.log("totalDimensions: " + totalDimensions)

  if (totalDimensions < 1400) {
    const isHorizontal = windowDimensions.width > windowDimensions.height
    return <Display isHorizontal={isHorizontal} options={options} sprite={props.sprite} spriteImg={spriteImg} isAnswerSelected={isAnswerSelected} validateAnswer={validateAnswer} />
  } 
  else {
    return (
      <div className="turn">
        <img
            src="images/whosthatpokemon.png"
            alt="title"
            className="headerImg"
            />
        <div className='turn-content'>
          <EncounteredPokemonContainer />
          <div className='pokedex'>
            {isAnswerSelected && (
              <Sound
              url={
                pokedexGlowColor === POKEDEX_GLOW_COLOR_INCORRECT
                ? '/miscAudioFiles/Wrong_Answer.mp3'
                : '/pokemonCries/' +
                props.sprite.id +
                ' - ' +
                props.sprite.ename +
                '.wav'
              }
              playStatus={Sound.status.PLAYING}
              volume={volume}
              />
              )}
            <img src="/images/pokedex.png" className="pokedex" alt="pokedex" />
            {spriteImg ? (
              <img
              src={spriteImg}
              className={
                isAnswerSelected ? 'pkmnSprite pkmnSpriteShowing fullscreen' : 'pkmnSprite fullscreen'
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
                onClick={validateAnswer}
                disabled={isAnswerSelected}
                />
                ))}
            </div>
            <div className='scoreboard'>
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
          </div>
          <GenerationFilter onGenerationChanged={onGenerationChanged} />
          </div>
        <div>
        </div>
      </div>
    )
  }
  
}
export default Game
/*
<RotomContainer />
*/