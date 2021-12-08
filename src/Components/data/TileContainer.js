import React, { useState, useEffect } from 'react'
import Tile from "../Tile";



const TileContainer = ({ activeTiles }) => {
  const [activeTile, setActiveTile] = useState(null)

  useEffect(() => {
    setActiveTile(activeTiles)
  }, [activeTiles])

  let allTiles = []
  for (let i = 0; i < 225; i++) {
      allTiles.push(<Tile id={i} key={i} isActive={activeTile} />)
  }
  return allTiles
}


export default TileContainer