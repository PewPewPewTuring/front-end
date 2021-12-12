import React, { useState, useEffect } from 'react';
import '../Styles/Counter.css';
import { tilePosition } from './data/TileContainer.js';

const Counter = () => {
  let counter = 0;
  let timer = setInterval(() => {
    counter += 1;
    console.log(counter)
    document.getElementById('counterNumber').innerHTML = `${counter}`;
    if (tilePosition === 224) {
      const finalTime = counter;
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
