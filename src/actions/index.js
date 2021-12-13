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
 
export const getTileInfo = (tilePoints) => {
 return {
   type: 'ACTIVE_TILE_POINTS',
   payload: tilePoints
 }
}
