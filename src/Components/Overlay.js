import React, { useState, useEffect } from 'react';
import { grid } from './data/overlay-grid.js';
import '../Styles/Overlay.css';
import Player from './Player';
import Tile from './Tile.js';
import OverlayTile from './OverlayTile';
import TileContainer from './data/TileContainer.js';
import Exit from './Exit.js';

const Overlay = () => {
  // We may have to many moving parts.  Do we need a currentTile if the player position is already tracking this?
  // Have dynamic className.  If tile ID matches player position, change that className to active.
  const [playerPositionIndex, setPlayerPositionIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0)
  const [navigationEnabled, setNavigationEnabled] = useState(null);
  const [overlayGrid, setOverlayGrid] = useState(null)
  let overlayTiles = document.querySelectorAll('.overlay-tile');
  let allOverlayTiles;
  let orientation = 'up';
  let blockedOverlayTiles = [];
  let itemTiles = [];


  useEffect(() => {
    setNavigationEnabled(true);
    document.addEventListener('keydown', (e) => handleKeyDown(e))
  }, [])

  const checkCollision = (desiredTarget) => {
    if (blockedOverlayTiles.includes(desiredTarget)) {
      return true;
    }
  };

  const handleKeyDown = ({ key, code }) => {
    if (key === 'ArrowUp') {
      setActiveStep(prevActiveStep => prevActiveStep - 15)

    } else if (key === 'ArrowRight') {
      setActiveStep(prevActiveStep => prevActiveStep + 1)

    } else if (key === 'ArrowDown') {
      setActiveStep(prevActiveStep => prevActiveStep + 15)

    } else if (key === 'ArrowLeft') {
      setActiveStep(prevActiveStep => prevActiveStep - 1)

    } else if (code === 'Space') {

    }
  }

  if (activeStep < 224) {
    console.log(true);
  }

  return (
    <div className="overlay-container">
      <div className="overlay-tile-grid">
        <TileContainer activeTiles={activeStep} />
        <Exit activeStep={activeStep}/>
      </div>
    </div>
  )
}

export default Overlay;
