import React from 'react'

const Header = ({scores}) => {

  return (
    <header className='header'>
        <div className='scores'>Score: {scores.score}</div>
        <div className='title'>Memory Card</div>
        <div className='scores'>Best Score: {scores.highScore}</div>
    </header>
  )
}

export default Header