import React, { useState } from 'react';
import Map from './Map.js';
import '../Styles/Player.css';

const Player = (direction) => {
  let orientation;

  if (direction === 'left') {
    orientation = " left"
  } else if (direction === 'right') {
    orientation = ""
  }

  return(
    <div className="player"></div>
  )
};

export default Player;
