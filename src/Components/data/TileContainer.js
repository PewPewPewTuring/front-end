import React, { useState, useEffect } from 'react'
import Tile from "../Tile";



const TileContainer = () => {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    // setNavigationEnabled(true);
    document.addEventListener('keydown', (e) => handleKeyDown(e))
  }, [])

  const handleKeyDown = ({ key, code }) => {
    if (key === 'ArrowUp') {
      setActiveStep(prevActiveStep => prevActiveStep - 15)

    } else if (key === 'ArrowRight') {
      setActiveStep(prevActiveStep => prevActiveStep + 1)

    } else if (key === 'ArrowDown') {
      setActiveStep(prevActiveStep => prevActiveStep + 15)

    } else if (key === 'ArrowLeft') {
      setActiveStep(prevActiveStep => prevActiveStep - 1)

    } else if (code === 'Space') {

    }
  }
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
      allTiles.push(<Tile id={i} key={i} isActive={activeStep} />)
  }
  return (
    <main className='overlay-container' >
      <div className='overlay-tile-grid' >
        {allTiles}
      </div>
    </main>
  )
}


export default TileContainer