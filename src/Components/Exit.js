import React, { useState, useEffect } from 'react'
import App from './App';
import '../Styles/Exit.css';

const Exit = ({ tilePosition, reachExit }) => {
  useEffect(() => {
    if (tilePosition === 224) {
      console.log('Heeeeey nice')
    }
  }, [tilePosition])

  return (
    <div className="exit level-one"></div>
  )
}

export default Exit;
