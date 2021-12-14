import redux from 'redux'
 
export const initialState = {
 activeTile: 0,
 totalPoints: 0,
 stepCount: 0,
 levelOneComplete: false,
 leaderBoard: [],
 currentPlayer: '',
 finalTime: null
}
 
export const appReducer = (state = initialState, action) => {
 switch(action.type) {
   case 'UP':
     return {...state, activeTile: state.activeTile - 15}
   case 'RIGHT':
     return {...state, activeTile: state.activeTile + 1}
   case 'DOWN':
     return {...state, activeTile: state.activeTile + 15}
   case 'LEFT':
     return {...state, activeTile: state.activeTile - 1}
    case 'STEP':
      return {...state, stepCount: state.stepCount + 1}
    case 'LEVEL_ONE_COMPLETE':
      return {...state, levelOneComplete: true}
    case 'GET_LEADER_BOARD':
      return {...state, leaderBoard: action.payload}
    case 'CURRENT_PLAYER':
      return {...state, currentPlayer: action.payload}
    case 'FINAL_TIME':
      return {...state, finalTime: action.payload}
   // case 'ACTIVE_TILE_POINTS':
   //   return state.totalPoints + payload
   default:
     return state
 }
}
