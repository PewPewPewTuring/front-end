import React, { useState, useEffect } from 'react';
import '../Styles/Tile.css';

const Tile = ({ id, isActive }) => {
  const [isTileType, setIsTileType] = useState('overlay-tile')
  // We can pass a prop that is a specific tiles behavior when interacted with
  // Event listeners that will handle behavior
  
  useEffect(() => {
    if (typeof isActive === 'string') {
      setIsTileType(isActive)
    } else if (typeof isActive === 'number') {
      isActive === id ? setIsTileType('active') : setIsTileType('overlay-tile')

    }
  }, [isActive])
  return (
    <div className={isTileType} id={id}></div>
  )
}

export default Tile;
