import React, { useEffect, useState } from 'react'
import '../styles/header.css'

const Header = ({score, incrementScore}) => {
    const [highScore, setHighScore] = useState(0);
    useEffect(()=>{
        let prevHighScore = localStorage.getItem('highScore');
        if(prevHighScore){
            setHighScore(prevHighScore);
        }
        return () => {
            localStorage.setItem('highScore', highScore);
        }
    }, [])

    useEffect(()=>{
        if(score > highScore)
        {
            setHighScore(score);
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