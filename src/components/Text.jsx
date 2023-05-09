import React from 'react';
import { useParams } from 'react-router-dom';

const Text = (props) => {
  
  const { text } = useParams();
  
  if (isNaN (`${text}`)) {
    return (
      <h1>
        The word is: { text }
      </h1>
    );
  }
  return (
    <div>
      <h1>
        The number is: { text }
      </h1>
    </div>
  );
};

export default Text