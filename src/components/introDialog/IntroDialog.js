import React, { useState } from 'react'

import './introDialog.css'

export default function IntroDialog({ onOkSelected, onNoSelected }) {
  const [displaying, setDisplaying] = useState(true)

  const handleClick = (fun) => {
    const context = new AudioContext()
    context.resume()
    fun()
    setDisplaying(false)
  }

  return (
    <div
      className="intro-dialog-shadow"
      onClick={() => setDisplaying(false)}
      style={displaying ? {} : { display: 'none' }}
    >
      <div className="intro-dialog-modal" onClick={(e) => e.stopPropagation()}>
        <div className="intro-dialog">
          <p className="intro-dialog-title">Play with music?</p>
          <div className="intro-dialog-button-container">
            <button
              className="intro-dialog-button"
              onClick={() => handleClick(onOkSelected)}
            >
              Yes
            </button>
            <button
              className="intro-dialog-button"
              onClick={() => handleClick(onNoSelected)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
