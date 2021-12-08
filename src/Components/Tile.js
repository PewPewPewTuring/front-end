import React, { useState, useEffect } from 'react';
import Player from './Player';
import '../Styles/Tile.css';

const Tile = ({ id, isActive }) => {
  const [isTileType, setIsTileType] = useState('overlay-tile')
  const [toRender, setToRender] = useState(null)
  // We can pass a prop that is a specific tiles behavior when interacted with
  // Event listeners that will handle behavior

  useEffect(() => {
    if (isActive === id) {
      setToRender(<Player key={'player'} />)
      console.log('render player', id)
    } else if (isActive !== id && toRender !== null) {
      setToRender(null)
      console.log('set to null', id)
    }
    // isActive === id ? setToRender(<Player key={'player'} />) : setToRender(null)
  }, [isActive])
  return (
    <div className={isTileType} id={id}>{toRender}</div>
  )
}

export default Tile;
