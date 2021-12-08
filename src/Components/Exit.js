import React, { useState, useEffect } from 'react'
import App from './App';
import '../Styles/Exit.css';

let levelComplete = false;

const Exit = ({ exitReached }) => {
  const [levelOneComplete, setLevelOneComplete] = useState(false);

  useEffect(() => {
    console.log('Reached: ', exitReached)
    setLevelOneComplete(true);
  }, [exitReached])

  return (
    <div className="exit level-one"></div>
  )
}

export default Exit;