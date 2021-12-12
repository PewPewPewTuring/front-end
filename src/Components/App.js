import React, { useState, useEffect } from 'react';
import Map from './Map';
import Tile from './Tile';
import Player from './Player';
import Overlay from './Overlay';
import TileContainer from './data/TileContainer';
import Exit from './Exit';
import Counter from './Counter';
import '../Styles/Counter.css'
import '../Styles/App.css';

export let hasReachedExit = false;

const App = () => {

  useEffect(() => {
    console.log('App registered')
  }, [hasReachedExit])

  return (
    <div className="app">
      <header className="app-header">Escape the House!</header>
      <TileContainer />
      <Counter />
    </div>
  )
}

export default App
