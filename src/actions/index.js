import redux from 'redux'
 
 
export const moveUp = () => {
 return {
   type: 'UP'
 }
}
 
export const moveRight = () => {
 return {
   type: 'RIGHT'
 }
}
 
export const moveDown = () => {
 return {
   type: 'DOWN'
 }
}
 
export const moveLeft = () => {
 return {
   type: 'LEFT'
 }
}

export const addToStepCount = () => {
  return {
    type: 'STEP'
  }
}

export const completeLevelOne = () => {
  return {
    type: 'LEVEL_ONE_COMPLETE'
  }
}

export const updateLeaderBoard = (leaders) => {
  return {
    type: 'GET_LEADER_BOARD',
    payload: leaders
  }
}

export const updateCurrentPlayer = (name) => {
  return {
    type: 'CURRENT_PLAYER',
    payload: name
  }
}

export const updateFinalTime = (time) => {
  return {
    type: 'FINAL_TIME',
    payload: time
  }
}
 
export const getTileInfo = (tilePoints) => {
 return {
   type: 'ACTIVE_TILE_POINTS',
   payload: tilePoints
 }
}
