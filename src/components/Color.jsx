import React from 'react';
import { useParams } from 'react-router-dom';

const Color = () => {
  
  const { word } = useParams();
  const { tColor } = useParams();
  const { bColor } = useParams();
  
  return (
    <div>
      <h1 style={{background: `${bColor}` }} >
        The word is: <span style={{color: `${tColor}`}} > {word} </span>
      </h1>
    </div>
  )
}

export default Color