

import React from 'react'

const GameOverOverlay = ({scores, newHighScore}) => {
  return newHighScore?
    (<div className='game-over green'>
        <div id='new-high-score'>
            New High Score
            <div>{scores.highScore}</div>
        </div>
        
    </div>):

    (<div className='game-over red'>
        Game Over
        <div id='end-scores'>
            <div>Score: {scores.score}</div>
            <div>High Score: {scores.highScore}</div>
        </div>
    </div>)
}

export default GameOverOverlay