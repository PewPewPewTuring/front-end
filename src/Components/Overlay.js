import React, { useState, useEffect } from 'react';
import { grid } from './data/overlay-grid.js';
import '../Styles/Overlay.css';
import Player from './Player';
import Tile from './Tile.js';
import OverlayTile from './OverlayTile';
import TileContainer from './data/TileContainer.js';

const Overlay = () => {
  // We may have to many moving parts.  Do we need a currentTile if the player position is already tracking this?
  // Have dynamic className.  If tile ID matches player position, change that className to active.
  const [playerPositionIndex, setPlayerPositionIndex] = useState(0);
  const [navigationEnabled, setNavigationEnabled] = useState(null);
  const [overlayGrid, setOverlayGrid] = useState(null)
  let overlayTiles = document.querySelectorAll('.overlay-tile');
  let allOverlayTiles;
  let orientation = 'up';
  let blockedOverlayTiles = [];
  let itemTiles = [];


  useEffect(() => {
    setNavigationEnabled(true);
  }, [])

  // useEffect(() => {

  // }, [playerPositionIndex])

  const checkCollision = (desiredTarget) => {
    if (blockedOverlayTiles.includes(desiredTarget)) {
      return true;
    }
  };



  if (navigationEnabled) {
    allOverlayTiles = document.querySelectorAll('.overlay-tile');
    window.addEventListener('keydown', (event) => {
      // currentTile = grid[playerPositionIndex];
      let leftBoundary = playerPositionIndex % 10 === 0;
      let rightBoundary = (playerPositionIndex - 9) % 10 === 0;
      const inputKey = event.key;
      const select = event.code === 'Space';
      let targetTile;

      if (select) {
        selectObject();
      }

      const changeOrientation = (direction) => {
      }

      // Should we listen for the key input on the Player component and call and run logic from Player?
      if (!leftBoundary && inputKey === 'ArrowLeft') {
        orientation = 'left';
        targetTile = allOverlayTiles[playerPositionIndex - 1];
        if (!checkCollision(targetTile)) {
          changeOrientation();
          // currentTile = allOverlayTiles[playerPositionIndex - 1];
          changeOrientation(orientation);
          setPlayerPositionIndex(playerPositionIndex - 1)
        };

      } else if (!rightBoundary && inputKey === 'ArrowRight') {
        orientation = 'right';
        targetTile = overlayTiles[playerPositionIndex + 1];
        setPlayerPositionIndex(playerPositionIndex + 1);
        console.log('It registered the right key')

      } else if (inputKey === 'ArrowUp' && playerPositionIndex > 9) {
        orientation = 'up'
        targetTile = allOverlayTiles[playerPositionIndex - 15];
        checkCollision(targetTile);
        if (!checkCollision(targetTile)) {
          // currentTile = allOverlayTiles[playerPositionIndex - 15];
          changeOrientation(orientation);
          setPlayerPositionIndex(playerPositionIndex - 15)
        };
      } else if (inputKey === 'ArrowDown' && playerPositionIndex < 70) {
        orientation = 'down';
        targetTile = allOverlayTiles[playerPositionIndex + 15];
        if (!checkCollision(targetTile)) {
          // currentTile = allOverlayTiles[playerPositionIndex + 15];
          changeOrientation(orientation);
          setPlayerPositionIndex(playerPositionIndex + 15)
        };
      }
    })
  };

  const selectObject = () => {
    let positionObject = false;
    if (orientation === 'left' && itemTiles.includes(overlayTiles[playerPositionIndex - 1])) {
      overlayTiles[playerPositionIndex - 1].classList.add('item-acquired');
    } else if (orientation === 'right' && itemTiles.includes(overlayTiles[playerPositionIndex + 1])) {

    } else if (orientation === 'up' && itemTiles.includes(overlayTiles[playerPositionIndex - 10])) {

    } else if (orientation === 'down' && itemTiles.includes(overlayTiles[playerPositionIndex + 10])) {

    }
  }

  return (
    <div className="overlay-container">
      <div className="overlay-tile-grid">
        <TileContainer activeTiles={playerPositionIndex} />
      </div>
    </div>
  )
}

export default Overlay;
