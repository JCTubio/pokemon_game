import React from 'react'
import './Rotom.css'
import { STANDARD_MODE } from '../../store/actions/Actions'

function Rotom({ gameMode, showRotomMessage, rotomMessage, turnDuration }) {
  return (
    <div
      className={
        showRotomMessage && gameMode === STANDARD_MODE
          ? 'rotomDex rotomDexShowing'
          : 'rotomDex'
      }
      style={{
        animationDuration: turnDuration + 'ms',
      }}
    >
      <div className="rotomDexContainer">
        <p className="rotomMessage">{rotomMessage.toUpperCase()} </p>
        <img src="/images/rotomDex.png" alt="rotom dex" />
      </div>
    </div>
  )
}

export default Rotom
