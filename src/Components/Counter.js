import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateFinalTime } from '../actions';
import '../Styles/Counter.css';
// import { useSelector } from 'react-redux';
import { tilePosition } from './data/TileContainer.js';

const Counter = () => {
  const dispatch = useDispatch()

  let counter = 0;
  let timer = setInterval(() => {
    counter += 1;
    // console.log(tilePosition)
    // console.log(counter)
    document.getElementById('counterNumber').innerHTML = `${counter}`;
    if (tilePosition === 224) {
      const finalTime = counter;
      dispatch(updateFinalTime(finalTime))
      clearInterval(timer);
      console.log('FINAL: ', finalTime);
    }
  }, 1000);

  console.log('POSITION:', tilePosition)

  return (
    <section className="counter" id="counter">TIME: <span className="counter-number" id="counterNumber"></span></section>
  )
}

export default Counter;
