import React from 'react'
import './Rotom.css'
import { TIME_TRIAL } from '../../store/actions/Actions'

function Rotom({
  gameMode,
  rotomMessageStyle,
  showRotomMessage,
  rotomMessage,
  turnDuration,
}) {
  return (
    <div
      className={
        showRotomMessage && gameMode !== TIME_TRIAL
          ? 'rotomDex rotomDexShowing'
          : 'rotomDex'
      }
      style={{
        animationDuration: turnDuration + 'ms',
      }}
    >
      <div className={'rotomDexContainer ' + rotomMessageStyle}>
        <p className="rotomMessage ">{rotomMessage.toUpperCase()} </p>
        <img src="/images/rotomDex.png" alt="rotom dex" />
      </div>
    </div>
  )
}

export default Rotom
