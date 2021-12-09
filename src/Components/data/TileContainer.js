import React, { useState, useEffect } from 'react'
import Tile from "../Tile";
import Exit from "../Exit";

const TileContainer = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [exitReached, setExitReached] = useState(false)
  const [stepCount, setStepCount] = useState(0)
  let walls = [5, 20, 30, 31, 32, 35, 47, 50]
  let tilePosition = 0

  useEffect(() => {
    document.addEventListener('keydown', (e) => handleKeyDown(e))
  }, [])

  useEffect(() => {
    if (activeStep === 224) {
      setExitReached(true);
    }
  }, [activeStep])

  const handleKeyDown = ({ key, code }) => {
    console.log(tilePosition);
    if (key === 'ArrowUp' && tilePosition > 14) {
      if (!walls.includes(tilePosition - 15)) {
        tilePosition -= 15;
        setActiveStep(prevActiveStep => prevActiveStep - 15)
        setStepCount(stepCount => stepCount + 1);
      }
    } else if (key === 'ArrowRight' && ((tilePosition + 1) % 15 !== 0)) {
      if (!walls.includes(tilePosition + 1)) {
        tilePosition += 1;
        setActiveStep(prevActiveStep => prevActiveStep + 1)
        setStepCount(stepCount => stepCount + 1);
      }
    } else if (key === 'ArrowDown' && (tilePosition < 210)) {
      if (!walls.includes(tilePosition + 15)) {
        tilePosition += 15;
        setActiveStep(prevActiveStep => prevActiveStep + 15)
        setStepCount(stepCount => stepCount + 1);
      }
    } else if (key === 'ArrowLeft' && (tilePosition % 15 !== 0)) {
      if (!walls.includes(tilePosition - 1)) {
        tilePosition -= 1;
        setActiveStep(prevActiveStep => prevActiveStep - 1)
        setStepCount(stepCount => stepCount + 1);
      }
    } else if (code === 'Space') {

    }
  }

  let allTiles = []
  for (let i = 0; i < 225; i++) {
      if (walls.includes(i)) {
        allTiles.push(<div className="wall"></div>)
      } else if (i === 224) {
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
