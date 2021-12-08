import React, { useState, useEffect } from 'react';
import Map from './Map';
import Tile from './Tile';
import Player from './Player';
import Overlay from './Overlay';
import TileContainer from './data/TileContainer';
import Exit from './Exit';
import '../Styles/App.css';

const App = () => {
  const [levelOneComplete, setLevelOneComplete] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  let levelOneCompleted = false;

  useEffect(() => {
    levelOneCompleted = true;
  }, [levelOneComplete])

  return (
    <div className="app">
      <header className="app-header">Header for Pew Pew Pew App</header>
      { levelOneCompleted === false && <TileContainer /> }
        {/* <Map /> */}
        {/* <Overlay /> */}
    </div>
  )
}

export default App


// comment
