import React, { useState } from 'react';
import Map from './Map';
import Tile from './Tile';
import Player from './Player';
import Overlay from './Overlay';
import { useSelector, useDispatch } from 'react-redux';
import { action } from '../Redux'; 
import '../Styles/App.css';


const App = () => {

  return (
    <div className="app">
      <header className="app-header"></header> 
        <Map />
        <Overlay />
    </div>
  )
}


export default App 