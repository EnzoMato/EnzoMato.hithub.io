import React from 'react'
import './Box.css'

function Box() {
  return (
    <>
      <div className='box-element'>
        <div className='box-element-text'>
          <p className='box-text'>Entrar en tu vida y cambiarlo todo, llenarte de alegría y motivarte a vivir. Es algo que solo un perro o gato pueden hacer.</p>
        </div>
        <div className='box-element-button'> 
          <button className='box-button' onClick={() => handleClick()}>Adopta que esperas</button>
        </div>
      </div>
    </>
  )
}

export default Box
