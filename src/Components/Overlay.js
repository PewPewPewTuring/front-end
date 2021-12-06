import React, { useState, useEffect } from 'react';
import { grid } from './data/overlay-grid.js';
import '../Styles/Overlay.css';
import Player from './Player';
import OverlayTile from './OverlayTile';

const Overlay = () => {
  const [playerPositionIndex, setPlayerPositionIndex] = useState(0);
  const [navigationEnabled, setNavigationEnabled] = useState(null);
  const [overlayGrid, setOverlayGrid] = useState(null)
  let overlayTiles = document.querySelectorAll('.overlay-tile');
  let allOverlayTiles;
  let orientation = 'up';
  let blockedOverlayTiles = [];
  let itemTiles = [];
  let currentTile = overlayTiles[playerPositionIndex];
  useEffect(() => {
    setNavigationEnabled(true);
  }, [])

  useEffect(() => {
    console.log(currentTile)

  }, [playerPositionIndex])

  const checkCollision = (desiredTarget) => {
    if (blockedOverlayTiles.includes(desiredTarget)) {
      console.log('collision')
      return true;
    }
  };

  if (navigationEnabled) {
    console.log('it worked!')


    allOverlayTiles = document.querySelectorAll('.overlay-tile');
    window.addEventListener('keydown', (event) => {
      currentTile = grid[playerPositionIndex];
      let leftBoundary = playerPositionIndex % 10 === 0;
      let rightBoundary = (playerPositionIndex - 9) % 10 === 0;
      const inputKey = event.key;
      const select = event.code === 'Space';
      let targetTile;

      if (select) {
        selectObject();
      }

      const changeOrientation = (direction) => {
        console.log('temp')
      }

      if (!leftBoundary && inputKey === 'ArrowLeft') {
        orientation = 'left';
        targetTile = allOverlayTiles[playerPositionIndex - 1];
        if (!checkCollision(targetTile)) {
          changeOrientation();
          currentTile = allOverlayTiles[playerPositionIndex - 1];
          changeOrientation(orientation);
          playerPositionIndex -= 1;
        };
      } else if (!rightBoundary && inputKey === 'ArrowRight') {
        orientation = 'right';
        targetTile = overlayTiles[playerPositionIndex + 1];
        setPlayerPositionIndex(playerPositionIndex + 1);
      } else if (inputKey === 'ArrowUp' && playerPositionIndex > 9) {
        orientation = 'up'
        targetTile = allOverlayTiles[playerPositionIndex - 15];
        checkCollision(targetTile);
        if (!checkCollision(targetTile)) {
          currentTile = allOverlayTiles[playerPositionIndex - 15];
          changeOrientation(orientation);
          playerPositionIndex -= 15;
        };
      } else if (inputKey === 'ArrowDown' && playerPositionIndex < 70) {
        orientation = 'down';
        targetTile = allOverlayTiles[playerPositionIndex + 15];
        if (!checkCollision(targetTile)) {
          currentTile = allOverlayTiles[playerPositionIndex + 15];
          changeOrientation(orientation);
          playerPositionIndex += 15;
        };
      }
    })
  };

  const selectObject = () => {
    let positionObject = false;
    if (orientation === 'left' && itemTiles.includes(overlayTiles[playerPositionIndex - 1])) {
      console.log('GET!')
      overlayTiles[playerPositionIndex - 1].classList.add('item-acquired');
    } else if (orientation === 'right' && itemTiles.includes(overlayTiles[playerPositionIndex + 1])) {
      console.log('GET!')
    } else if (orientation === 'up' && itemTiles.includes(overlayTiles[playerPositionIndex - 10])) {
      console.log('GET!')
    } else if (orientation === 'down' && itemTiles.includes(overlayTiles[playerPositionIndex + 10])) {
      console.log('GET!')
    }
  }

  return (
    <div className="overlay-container">
      <div className="overlay-tile-grid">
        {grid}
      </div>
    </div>
  )
}

export default Overlay;
