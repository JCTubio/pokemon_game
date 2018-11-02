import React from 'react'
import './Rotom.css'

function Rotom({ highlight, rotomMessage, turnDuration }) {
  console.log(turnDuration)
  return (
    <div
      className={highlight ? 'rotomDex rotomDexShowing' : 'rotomDex'}
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
