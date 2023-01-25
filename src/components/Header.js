import React from 'react'

const Header = ({score, highScore}) => {

  return (
    <header className='header'>
        <div className='scores'>Score: {score}</div>
        <div className='title'>Memory Card</div>
        <div className='scores'>Best Score: {highScore}</div>
    </header>
  )
}

export default Header