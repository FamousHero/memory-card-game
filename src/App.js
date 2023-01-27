import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import GameOverOverlay from './components/GameOverOverlay';

function App() {

  const [scores, setScores] = useState({
    score: 0,
    highScore: 0,
  })
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [newHighScore, setNewHighScore] = useState(false);

  
/**************UseEffects******************/
  useEffect(()=>{
    let prevHighScore = localStorage.getItem('highScore');
    if(prevHighScore){
      setScores(oldState=>{return {...oldState, highScore: prevHighScore}});
      }
  }, [])


/************Prop Functions*****************/
  //localStorage.setItem('highScore', 0);
  const handleScore = ()=>{
      setScores(oldscores=>{
        let currScore = oldscores.score+1;
        if(currScore > oldscores.highScore)
        {
          let currHighScore = oldscores.highScore+1;
          if(currHighScore > localStorage.getItem('highScore')){
            
            localStorage.setItem('highScore', currHighScore);
            setNewHighScore(true);
          }
          return {score: currScore, highScore: currHighScore};
        }
        return {...oldscores, score: currScore}
      });  
    }

  const resetScore = ()=>{
    setScores(oldState=>{
      return {...oldState, score: 0};
    })
  }

  const toggleGameOver = ()=>{
    setGameOver(oldState=>!oldState);
    setTimeout(()=>{
      setGameOver(oldState=>!oldState);
      resetScore(); 
      setNewHighScore(false);         
    }, 1000);
  }

  return (
    <div className="App">
      <Header scores={scores} />
      <Main handleScore={handleScore} toggleGameOver={toggleGameOver} 
      gameOver={gameOver} />
      {gameOver? <GameOverOverlay scores={scores} newHighScore={newHighScore}/>:null};
    </div>
  );
}

export default App;
