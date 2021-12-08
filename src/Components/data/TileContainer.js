import React, { useState, useEffect } from 'react'
import Tile from "../Tile";
import Exit from "../Exit";

const TileContainer = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [exitReached, setExitReached] = useState(false)

  useEffect(() => {
    // setNavigationEnabled(true);
    document.addEventListener('keydown', (e) => handleKeyDown(e))
  }, [])

  useEffect(() => {
    if (activeStep === 224) {
      setExitReached(true);
    }
  }, [activeStep])

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

  let allTiles = []
  for (let i = 0; i < 225; i++) {
      if (i === 224) {
        allTiles.push(<Exit exitReached={exitReached}/>)
      } else {
        allTiles.push(<Tile id={i} key={i} isActive={activeStep} />)
      }
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
