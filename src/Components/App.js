import React, { useState } from 'react';
import Map from './Map';
import Tile from './Tile';
import Player from './Player';
import Overlay from './Overlay';
import '../Styles/App.css';

const App = () => {

  return (
    <div className="app">
      <header className="app-header">Header for Pew Pew Pew App</header>
        <Map />
        <Overlay />
        <Player />
    </div>
  )
}

export default App
