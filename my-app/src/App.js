import React, { useState } from 'react';

//import components
import Dashboard from './components/Dashboard.js';
import Display from './components/Display.js';

//import css
import './App.css';


function App() {
  //hook will manage state of strikes 
  //initialized to "0" strikes
  const [strikes, setStrikes] = useState(0);

  //hook will manage state of balls 
  //initialized to "0" balls
  const [balls, setBalls] = useState(0);

  //game logic for strike increase
  const strikes = () => {
    if(strikes == 2)
    {
      setSrikes(0) // after the third strike reset strikes to 0
      setBalls(0) // after the third strike reset balls to 0
    }
    else
    {
      setStrike(strikes+1) // increment the number of strikes
    }
  }

  //game logic for ball increase 
  const balls = () => {
    if(balls == 3)
    {
      setStrikes(0) // after the fourth ball reset strikes to 0
      setBalls(0) // after the fourth ball reset balls to 0
    }
    else
    {
      setBalls(balls + 1) // increment number of balls
    }
  }

  //game logic for foul balls
  const foul = () => {
    if(strikes == 2)
    {
      setStrikes(2) // maintain 2 strikes after strike 2
    }
    else
    {
      setStrikes(strikes + 1) // increase the number of strikes when < 2 strikes
    }
  }

  //game logic for hit
  const hit = () => {
    setStrikes(0) // strikes reset to 0
    setBalls(0) // balls reset to 0
  }
  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} />
      <Dashboard balls={balls} strikes={strikes} foul={foul} hit={hit} />
    </div>
  );
}

export default App;
