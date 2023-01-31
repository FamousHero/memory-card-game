import React, {useState, useEffect} from 'react'

const Header = ({scores}) => {

  const [mobileView, setMobileView] = useState(window.innerWidth);
  
  
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
    setMobileView(oldsize=>window.innerWidth)
    })
  }, []);

  return (
    <header className='header'>
        {mobileView < 1000? <><div className='title'>Memory Card</div>
          <div className='scores'>Score: {scores.score}</div></>: <><div className='scores'>Score: {scores.score}</div>
          <div className='title'>Memory Card</div></>}
        <div className='scores'>Best Score: {scores.highScore}</div>
    </header>
  )
}

export default Header