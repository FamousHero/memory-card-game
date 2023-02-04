import React, {useState, useEffect} from 'react'

const Header = ({scores}) => {

  const [mobileView, setMobileView] = useState(false);
  
  
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
    setMobileView(()=>{
      if(window.innerWidth< 1000)
        return true;
      return false;
    })
    })
  }, []);


  return (
    <header className='header'>
        {mobileView? <><div className='title'>Memory Card</div>
          <div className='scores'>Score: {scores.score}</div></>: <><div className='scores'>Score: {scores.score}</div>
          <div className='title'>Memory Card</div></>}
        <div className='scores'>Best Score: {scores.highScore}</div>
    </header>
  )
}

export default Header