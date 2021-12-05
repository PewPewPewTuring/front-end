import React, { useState } from 'react';
import Map from './Map.js';
import '../Styles/Player.css';

const Player = () => {
  console.log('Test')
  window.addEventListener('keydown', (event) => {
    console.log('Heyooo')
  })

  return(
    <div className="player"></div>
  )
};

export default Player;
