import React, {useState} from 'react'

const Header = ({scores}) => {

  const [mobileView, setMobileView] = useState(window.innerWidth);
  window.addEventListener('resize', ()=>{
    setMobileView(oldsize=>window.innerWidth)
  });
  console.log(mobileView);
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