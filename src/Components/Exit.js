import React, { useState, useEffect } from 'react'
import App from './App';
import { hasReachedExit } from './App';
import { useSelector, useDispatch } from 'react-redux';
import { completeLevelOne } from '../actions';
import '../Styles/Exit.css';
// { tilePosition, reachExit }
const Exit = () => {
  const activeTile = useSelector(state => state.activeTile)
  let tilePosition = activeTile
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (tilePosition === 224) {
      dispatch(completeLevelOne())
      // reachExit(true);

    }
  }, [tilePosition])

  return (
    <div className="exit level-one"></div>
  )
}

export default Exit;
