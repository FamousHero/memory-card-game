import React, { useEffect} from 'react'

const Header = ({score, highScore, handleHighScore, handleNewHighScore}) => {
    useEffect(()=>{
        let prevHighScore = localStorage.getItem('highScore');
        if(prevHighScore){
            handleHighScore(prevHighScore);
        }
    }, [])
    useEffect(()=>{
        let oldHS = localStorage.getItem('highScore');
        if(highScore > oldHS)
        {
            localStorage.setItem('highScore', highScore);
            handleNewHighScore();
        }
    
    }, [highScore])
    useEffect(()=>{
        if(score > highScore)
        {
            handleHighScore(score);

        }
    }, [score])
  return (
    <header className='header'>
        <div className='scores'>Score: {score}</div>
        <div className='title'>Memory Card</div>
        <div className='scores'>Best Score: {highScore}</div>
    </header>
  )
}

export default Header