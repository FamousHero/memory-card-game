

import React from 'react'

const GameOverOverlay = ({score, highScore}) => {
  return (
    <div id='game-over'>
        Game Over
        <div id='end-scores'>
            <div>Score: {score}</div>
            <div>High Score: {highScore}</div>
        </div>
    </div>
  )
}

export default GameOverOverlay