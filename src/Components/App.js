import React, { useState } from 'react';
import Map from './Map';
import Tile from './Tile';
import Player from './Player';
import Overlay from './Overlay';
import TileContainer from './data/TileContainer';
import '../Styles/App.css';

const App = () => {



  return (
    <div className="app">
      <header className="app-header">Header for Pew Pew Pew App</header>
      <TileContainer />
        {/* <Map /> */}
        {/* <Overlay /> */}
    </div>
  )
}

export default App


// comment