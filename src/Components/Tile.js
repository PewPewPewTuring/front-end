import React, { useState, useEffect } from 'react';
import Player from './Player';
import '../Styles/Tile.css';

const Tile = ({ id, isActive }) => {
  const [isTileType, setIsTileType] = useState('overlay-tile')
  const [toRender, setToRender] = useState(null)
  // We can pass a prop that is a specific tiles behavior when interacted with
  // Event listeners that will handle behavior

  useEffect(() => {
    isActive === id ? setToRender(<Player key={'player'} />) : setToRender(null)
    // if (typeof isActive === 'string') {
    //   setIsTileType(isActive)
    // } else if (typeof isActive === 'number') {
    //   // isActive === id ? setIsTileType('active') : setIsTileType('overlay-tile')
    //   toRender = isActive === id ? <Player /> : setIsTileType('overlay-tile')

    // }
  }, [isActive])
  return (
    <div className={isTileType} id={id}>{toRender}</div>
  )
}

export default Tile;
