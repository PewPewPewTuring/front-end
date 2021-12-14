import React, { useState, useEffect } from 'react'
import Tile from "../Tile";
import Exit from "../Exit";
import Breakaway from "../Breakaway";
import Counter from "../Counter";
import { useSelector, useDispatch } from 'react-redux';
import { moveUp, moveRight, moveDown, moveLeft, addToStepCount } from '../../actions';

export let tilePosition = 0;

const TileContainer = ({ reachExit }) => {
  const activeTile = useSelector(state => state.activeTile)
  tilePosition = activeTile
  const stepCount = useSelector(state => state.stepCount)
  const levelOneComplete = useSelector(state => state.levelOneComplete)
  const dispatch = useDispatch()
  // const [activeStep, setActiveStep] = useState(0)
  // const [stepCount, setStepCount] = useState(0)
  // const [levelOneComplete, setLevelOneComplete] = useState(false);
  let walls = [5, 12, 20, 22, 24, 27, 28, 30, 31, 32, 35, 37, 40, 50, 52, 57, 62, 63, 64, 65, 67, 68, 69, 70, 71, 72, 82, 90, 91, 92, 93, 94, 95, 96, 97, 106, 115, 116, 117, 118, 119, 134, 136, 138, 139, 140, 141, 142, 143, 144, 145, 151, 156, 162, 166, 167, 168, 173, 178, 183, 188, 189, 190, 191, 192, 193, 198, 199, 200, 201, 203, 202, 210];

  useEffect(() => {
    document.addEventListener('keydown', (e) => handleKeyDown(e))
  }, [])

  useEffect(() => {
    if (tilePosition === 224) {
      // console.log('reached')
    }
  }, [tilePosition])

  const handleKeyDown = ({ key, code }) => {
    if (key === 'ArrowUp' && tilePosition > 14) {
      if (!walls.includes(tilePosition - 15)) {
        dispatch(moveUp())
        dispatch(addToStepCount())
        // tilePosition -= 15;
        // console.log(tilePosition);
        // setActiveStep(prevActiveStep => prevActiveStep - 15)
        // setStepCount(stepCount => stepCount + 1);
      }
    } else if (key === 'ArrowRight' && ((tilePosition + 1) % 15 !== 0)) {
      if (!walls.includes(tilePosition + 1)) {
        dispatch(moveRight())
        dispatch(addToStepCount())
        // tilePosition += 1;
        // setActiveStep(prevActiveStep => prevActiveStep + 1)
        // setStepCount(stepCount => stepCount + 1);
      }
    } else if (key === 'ArrowDown' && (tilePosition < 210)) {
      if (!walls.includes(tilePosition + 15)) {
        dispatch(moveDown())
        dispatch(addToStepCount())
        // tilePosition += 15;
        // setActiveStep(prevActiveStep => prevActiveStep + 15)
        // setStepCount(stepCount => stepCount + 1);
      }
    } else if (key === 'ArrowLeft' && (tilePosition % 15 !== 0)) {
      if (!walls.includes(tilePosition - 1)) {
        dispatch(moveLeft())
        dispatch(addToStepCount())
        // tilePosition -= 1;
        // setActiveStep(prevActiveStep => prevActiveStep - 1)
        // setStepCount(stepCount => stepCount + 1);
      }
    } else if (code === 'Space') {

    }
  }
// In Exit component: tilePosition={tilePosition} reachExit={setLevelOneComplete}
// In Tile component: isActive={activeStep}

  let allTiles = []
  for (let i = 0; i < 225; i++) {
      if (walls.includes(i)) {
        allTiles.push(<div className="wall"></div>)
      } else if (i === 224) {
        allTiles.push(<Exit />)
      } else if (i === 47 || i === 42 || i === 108 || i === 123 || i === 130 || i === 165 || i === 179){
        allTiles.push(<Breakaway />)
      } else {
        allTiles.push(<Tile id={i} key={i} />)
      }
  }
  return (
    <main className='overlay-container' >
      {!levelOneComplete &&
        <div className='overlay-tile-grid' >
          {allTiles}
        </div>
      }
      {levelOneComplete &&
        <div className="score-card">
          <div>Way to go!</div>
          <div>You escaped this room in {document.getElementById('counterNumber').innerText} seconds!</div>
          <div>You moved {stepCount} spaces to get to the end.</div>
        </div>
      }
    </main>
  )
}


export default TileContainer;
