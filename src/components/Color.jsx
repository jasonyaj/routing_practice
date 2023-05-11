import React from 'react';
import { useParams } from 'react-router-dom';

const Color = () => {
  
  const { word } = useParams(); //word to be displayed
  const { tColor } = useParams(); //text color
  const { bColor } = useParams(); //background color
  
  return (
    <div>
      <h1 style={{background: `${bColor}` }} >
        The word is: <span style={{color: `${tColor}`}} > {word} </span>
      </h1>
    </div>
  )
}

export default Color