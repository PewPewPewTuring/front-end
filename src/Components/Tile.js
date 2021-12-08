import React, { useState, useEffect } from 'react';
import Player from './Player';
import '../Styles/Tile.css';

const Tile = ({ id, isActive }) => {
  const [toRender, setToRender] = useState(null)
  let update = isActive !== id ? false : true
  // const [isTileType, setIsTileType] = useState('overlay-tile')
  // We can pass a prop that is a specific tiles behavior when interacted with
  // Event listeners that will handle behavior


  useEffect(() => {
    let isChanged = false
    
    if (isActive === id) {
      setToRender(<Player key={'player'} />)
      console.log('render player', id)
      return isChanged = true

    } else if (isActive !== id && toRender !== null) {
      setToRender(null)
      console.log('set to null', id)
      return isChanged = true
    }

    return isChanged
    // isActive === id ? setToRender(<Player key={'player'} />) : setToRender(null)
  }, [update])
  return (
    <div className='overlay-tile' id={id}>{toRender}</div>
  )
}

export default Tile;
