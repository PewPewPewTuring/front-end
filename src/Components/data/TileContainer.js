import React, { useState, useEffect } from 'react'
import Tile from "../Tile";



const TileContainer = ({ activeTiles }) => {
  
  // const [activeTile, setActiveTile] = useState(null)
  // let activeTile = null

  // useEffect(() => {
  //   checkActiveTile(activeTiles)
  // }, [activeTiles])

  // const checkActiveTile = (active) => {
  //   activeTile = activeTiles
  // }

  let allTiles = []
  for (let i = 0; i < 225; i++) {
      allTiles.push(<Tile id={i} key={i} isActive={i === activeTiles && activeTiles} />)
  }
  return allTiles
}


export default TileContainer