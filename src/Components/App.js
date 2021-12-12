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
import {levelOneComplete, setLevelOneComplete} from './Exit';

const App = () => {
  const [levelOneComplete, setLevelOneComplete] = useState(false);

  useEffect(() => {
    console.log('Level completed')
  }, [levelOneComplete])

  return (
    <div className="app">
      <header className="app-header">Escape the House!</header>
      { levelOneComplete === false && <TileContainer /> }
      <Counter />
    </div>
  )
}

export default App
