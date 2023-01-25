import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import GameOverOverlay from './components/GameOverOverlay';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [newHighScore, setNewHighScore] = useState(false);

  
/**************UseEffects******************/
  useEffect(()=>{
    let prevHighScore = localStorage.getItem('highScore');
    if(prevHighScore){
        setHighScore(prevHighScore);
      }
  }, [])

  useEffect(()=>{
    let oldHS = localStorage.getItem('highScore');
    if(highScore > oldHS)
    {
      localStorage.setItem('highScore', highScore);
      setNewHighScore(true);
    }
    
  }, [highScore])

  useEffect(()=>{
    if(score > highScore)
    {
      setHighScore(oldhs=>score);
    }
  }, [score])



/************Prop Functions*****************/
  //localStorage.setItem('highScore', 0);
  const handleScore = (newScore)=>{
      setScore(score=>score+1);  
    }

  const toggleGameOver = ()=>{
    setGameOver(oldState=>!oldState);
    setTimeout(()=>{
      setGameOver(oldState=>!oldState);
      setScore(0); 
      setNewHighScore(false);         
    }, 1000);
  }

  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <Main incrementScore={handleScore} toggleGameOver={toggleGameOver} 
      gameOver={gameOver} />
      {gameOver? <GameOverOverlay score={score} highScore={highScore} newHighScore={newHighScore}/>:null};
    </div>
  );
}

export default App;
