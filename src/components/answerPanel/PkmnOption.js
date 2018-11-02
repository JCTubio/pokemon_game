import React from 'react'
import './PkmnOption.css'

function PkmnOption({ name, onClick, disabled }) {
  return (
    <button
      className={'answer'}
      onClick={() => {
        onClick(name)
      }}
      disabled={disabled}
    >
      <p>{name.toUpperCase()}</p>
    </button>
  )
}

export default PkmnOption
