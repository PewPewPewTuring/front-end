import React, { useState, useEffect } from 'react';
import Map from './Map';
import Tile from './Tile';
import Player from './Player';
import Overlay from './Overlay';
import TileContainer from './data/TileContainer';
import Exit from './Exit';
import Counter from './Counter';
import LandingPage from './LandingPage';
import '../Styles/Counter.css'
import '../Styles/App.css';

export let hasReachedExit = false;

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = (event) => {
    event.preventDefault();
    setGameStarted(true);
    console.log('This worked my dude!')
    console.log(gameStarted);
  }

  useEffect(() => {
    console.log('App registered')
  }, [hasReachedExit])

  return (
    <div className="app">
      {!gameStarted && <LandingPage startGame={startGame} />}
      {gameStarted && <header className="app-header">Escape the House!</header>}
      {gameStarted && <TileContainer />}
      {gameStarted && <Counter />}
    </div>
  )
}

export default App
