import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Player from './Player';
import '../Styles/Tile.css';

const Tile = ({ id, isActive, direction }) => {
  const activeTile = useSelector(state => state.activeTile)
  const [toRender, setToRender] = useState(null)
  let update = activeTile !== id ? false : true
  // const [isTileType, setIsTileType] = useState('overlay-tile')
  // We can pass a prop that is a specific tiles behavior when interacted with
  // Event listeners that will handle behavior


  useEffect(() => {
    let isChanged = false

    if (activeTile === id) {
      setToRender(<Player key='player' direction={direction} />)
      console.log('render player', id)
      return isChanged = true

    } else if (activeTile !== id && toRender !== null) {
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
