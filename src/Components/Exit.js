import React, { useState, useEffect } from 'react'
import App from './App';
import { hasReachedExit } from './App';
import { useSelector, useDispatch } from 'react-redux';
import { completeLevelOne } from '../actions';
import '../Styles/Exit.css';

const Exit = ({ tilePosition, reachExit }) => {
  const activeTile = useSelector(state => state.activeTile)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (tilePosition === 224) {
      dispatch(completeLevelOne())
      // reachExit(true);

    }
  }, [activeTile])

  return (
    <div className="exit level-one"></div>
  )
}

export default Exit;
