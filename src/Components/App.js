import React, { useState } from 'react';
import Map from './Map';
import Tile from './Tile';
import Player from './Player';
import Overlay from './Overlay';
import { useSelector, useDispatch } from 'react-redux'; // Can get pieces of state from global state
import { action } from '../Redux'; 
import '../Styles/App.css';


const App = (props) => {
  const currentState = useSelector(state => state) // hook to useSelector.  state is referring to currentState
  const dispatch = useDispatch() // no arguments, just gives access to the fcn

  return (
    <div className="app">
      <header className="app-header">{props.someKey}</header> 
        <Map />
        <Overlay />
        <button onClick={() => dispatch(action())} ></button>
    </div>
  )
}


const mapStateToProps = (globalState) => {

  return {
    someKey: globalState  
  }
}

const mapDispatchToProps = {
  someOtherKey: action      
  action,
  action2
} 


export default App 






/**import React, { useState } from 'react';
import Map from './Map';
import Tile from './Tile';
import Player from './Player';
import Overlay from './Overlay';
import { connect } from 'react-redux';
import { action } from '../Redux'; // import the actions from redux file
import '../Styles/App.css';

// connect() connects Redux store and components.  Higher order component (fcn that takes component as argument and returns another component)
// connect params - connect(parts of state you want (a fcn), what actions to dispatch (usually an object)) (Component)

const App = (props) => {

// use the props where they are needed
// when props.action is called it will call fcn and dispatch it to go through the process of updating

  return (
    <div className="app">
      <header className="app-header">{props.someKey}</header> 
        <Map />
        <Overlay />
        <button onClick={props.action} ></button>
    </div>
  )
}


const mapStateToProps = (globalState) => {
  // returns obj with keys: name of prop the component wants
  // values: are the actual part of global state the component wants
  return {
    someKey: globalState  // Give App comp a prop called someKey and it's value from global state (whatever we set in our Redux)
  }
}

const mapDispatchToProps = {
  someOtherKey: action      // keys are name of prop that comp will receive.  Value will be action we want to dispatch to reducer
  // If key and value are the same you can just list name ex.
  action,
  action2
} 


export default connect(mapStateToProps, mapDispatchToProps)(App) // Export default the wrapper connect creates.  connect fcn will 
// return a fcn that we pass our component to

// can define mapDispatchToProps inline if simple enough ex. connect(mapStateToProps, {action, action2})(App) with no declared fcn

// or connect(state => ({key: globalState}, {action, action2}))(App) with no mapStateToProps declared */