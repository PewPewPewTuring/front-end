import redux, { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // middleware

export const action = () => {  // action creator returns an object describing what we want to do
  return {
    type: 'SOME_ACTION'
  }
}

export const thunkAction = () => {  // Gives us the dispatch instead of just handling it to allow it to dispatch when needed
  // API call to get info
  return (dispatch, getState) => {
    const stateStatus = getState()  // If you needed to get state to do some action
    // Do async stuff first
    // Then use dispatch({type: 'SOME_ACTION'})
  }
}

const reducer = (currentStatus, action) => { // our reducer that will take in a certain actions and decide the changes we want
  switch(action.type) {                      // to make to it.  Changes state ie currentStatus
    case 'SOME_ACTION':
      return 'whatever we want to happen to currentStatus'
  }
}

const store = createStore(reducer) // store is a collection of what we have

store.subscribe(() => console.log(store.getState()))  // subscribe fcn that will listen for changes to Redux state

export default store  // will export Redux as object into other files


// Provider(redux store) wraps the app component via connect(), now app has access to global state and dispatch and the wrap
// can pass them as props.



// Redux Thunk fcn that return a fcn.  Allows us to have action creators that do something other than just a syncronous action
// If we want to do async actions, we can return fcns from the action creators (as opposed to obj). 

// const store = createStore(reducer, applyMiddleWare(thunk))  plugging in thunk so action creators can return a fcn