import React, { useState } from 'react'
import Map from './Map'
import Tile from './Tile'
import Player from './Player'
import '../Styles/App.css'

const App = () => {

  return (
    <div className="app">
      <header className="app-header">Header for Pew Pew Pew App</header>
        <Map />
        <Player />
    </div>
  )
}

export default App


// comment