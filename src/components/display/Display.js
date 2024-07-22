import React from 'react'
import Sound from 'react-sound'

import PkmnOption from '../answerPanel/PkmnOption'
import { POKEDEX_GLOW_COLOR_INCORRECT } from '../app/config'

import './Display.css'

const Display = props => {

  const {
    sprite,
    spriteImg,
    isAnswerSelected,
    options,
    volume,
    pokedexGlowColor,
    validateAnswer,
    isHorizontal
  } = props
  
  return (
    <div className={`${isHorizontal ? 'horizontal-gameboy' : 'gameboy'}`} >
        <div className={`${isHorizontal ? 'horizontal-top-screen' : 'top-screen'}`}>
            <img
            src="images/whosthatpokemon.png"
            alt="title"
            className="headerImg"
            />
            <div className='display'>
                {isAnswerSelected && (
                    <Sound
                    url={
                        pokedexGlowColor === POKEDEX_GLOW_COLOR_INCORRECT
                        ? '/miscAudioFiles/Wrong_Answer.mp3'
                        : '/pokemonCries/' +
                        sprite.id +
                        ' - ' +
                        sprite.ename +
                        '.wav'
                    }
                    playStatus={Sound.status.PLAYING}
                    volume={volume}
                    />
                    )}
                {spriteImg ? (
                    <img
                    src={spriteImg}
                    className={
                        isAnswerSelected ? 'pkmnSprite pkmnSpriteMobileShowing' : 'pkmnSprite'
                    }
                    alt="sprite"
                    style={{
                        filter: isAnswerSelected ? '' : 'brightness(0)',
                    }}
                    />
                    ) : (
                        null
                    )
                }
            </div>
        </div>
        <div className={`${isHorizontal ? 'horizontal-bottom-screen' : 'bottom-screen'}`}>
            <div className='options'>
            {options.map(name => (
            <PkmnOption
                key={name}
                name={name}
                onClick={validateAnswer}
                disabled={isAnswerSelected}
            />
            ))}
            </div>
        </div>
    </div>
  )
}

export default Display
