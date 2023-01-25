

import React from 'react'

const GameOverOverlay = ({score, highScore, newHighScore}) => {
  return newHighScore?
    (<div className='game-over green'>
        <div id='new-high-score'>
            New High Score
            <div>{highScore}</div>
        </div>
        
    </div>):

    (<div className='game-over red'>
        Game Over
        <div id='end-scores'>
            <div>Score: {score}</div>
            <div>High Score: {highScore}</div>
        </div>
    </div>)
}

export default GameOverOverlay