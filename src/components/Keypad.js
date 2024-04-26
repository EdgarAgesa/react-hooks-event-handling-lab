import React from 'react';

function Keypad() {
  function handlePasswordInput() {
    console.log('Entering password...');
  }

  return (
    <div>
      <input type="password" onChange={handlePasswordInput} />
    </div>
  );
}

export default Keypad;
