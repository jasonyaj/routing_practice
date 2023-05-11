import React from 'react';
import { useParams } from 'react-router-dom';

const Text = () => {
  
  const { text } = useParams();
  // isNaN built-on function to differentiate between a word or number
  if (isNaN (`${text}`)) {
    // not a number return this
    return (
      <h1>
        The word is: { text }
      </h1>
    );
  }
  // else is a number return this
  return (
    <div>
      <h1>
        The number is: { text }
      </h1>
    </div>
  );
};

export default Text