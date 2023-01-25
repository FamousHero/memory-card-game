import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import GameOverOverlay from './components/GameOverOverlay';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [newHighScore, setNewHighScore] = useState(false);

  const handleScore = (newScore)=>{
    setScore(score=>score+1);  }

  const handleHighScore = (newHighScore)=>{
    setHighScore(newHighScore);
  }
  const handleNewHighScore = ()=>{
    setNewHighScore(true);
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
      <Header score={score} highScore={highScore} 
      handleNewHighScore={handleNewHighScore} handleHighScore={handleHighScore} />
      <Main incrementScore={handleScore} toggleGameOver={toggleGameOver} 
      gameOver={gameOver} />
      {gameOver? <GameOverOverlay score={score} highScore={highScore} newHighScore={newHighScore}/>:null};
    </div>
  );
}

export default App;
