import redux, { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {appReducer, initialState} from '../reducers'
 
const store = createStore(appReducer, initialState, composeWithDevTools())
 
store.subscribe(() => console.log(store.getState()))
 
export default store
