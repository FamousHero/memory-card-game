import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [score, setScore] = useState(0);

  const handleScore = (newScore)=>{
    setScore(score=>score+1);
    console.log('getting called');
  }
  const resetScore = ()=>{
    setScore(0);
  }
  return (
    <div className="App">
      <Header score={score} incrementScore={handleScore} />
      <Main incrementScore={handleScore} resetScore={resetScore} />
    </div>
  );
}

export default App;
