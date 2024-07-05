import React, { useState } from 'react';

function TextToggler() {
  const [isFirstText, setIsFirstText] = useState(true);

  const toggleText = () => {
    setIsFirstText(!isFirstText);
  };

  return (
    <div>
      <button onClick={toggleText}>Trocar Texto</button>
      <p>{isFirstText ? 'Texto 1' : 'Texto 2'}</p>
    </div>
  );
}

export default TextToggler;