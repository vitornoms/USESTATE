import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Clique aqui</button>
      <p>Você clicou {count} vezes</p>
    </div>
  );
}

export default ClickCounter;