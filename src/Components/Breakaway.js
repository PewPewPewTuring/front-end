import React, { useState, useEffect } from 'react'
import Tile from './Tile';
import TileContainer from './data/TileContainer.js'
import '../Styles/Tile.css';
import '../Styles/Breakaway.css';

const Breakaway = () => {
  let breakCount = 0;

  const breakTile = () => {
    breakCount += 1;
  }

  return (
    <div>
      {breakCount < 3 && <div className="breakaway" id="breakawayTile"></div>}
      {breakCount >= 4 && <Tile id={47} key={47} />}
    </div>
  )
}

export default Breakaway;
