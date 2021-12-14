import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Map from './Map';
import Tile from './Tile';
import Player from './Player';
import Overlay from './Overlay';
import TileContainer from './data/TileContainer';
import Exit from './Exit';
import Counter from './Counter';
import LandingPage from './LandingPage';
import { getLeaderBoard } from '../apiCalls/apiCalls.js';
import { updateLeaderBoard } from '../actions';
import '../Styles/Counter.css'
import '../Styles/App.css';

export let hasReachedExit = false;

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const dispatch = useDispatch()

  const startGame = (event) => {
    event.preventDefault();
    if (document.getElementById('player_name').value) {
      setGameStarted(true);
    }
  }

  const endGame = () => {
    document.location.reload();
  }

  useEffect(async() => {
    let leaders = await getLeaderBoard()
    dispatch(updateLeaderBoard(leaders))
  }, [])

  useEffect(() => {
    console.log('App registered')
  }, [hasReachedExit])


  return (
    <div className="app">
      {!gameStarted && <LandingPage startGame={startGame} />}
      {gameStarted && <header className="app-header">Escape the House!</header>}
      {gameStarted && <TileContainer resetGame={endGame}/>}
      {gameStarted && <Counter />}
    </div>
  )
}

export default App
