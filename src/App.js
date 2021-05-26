import React from 'react'

import { DrumPadBoard } from './DrumPadBoard'
import { ControlBoard } from './ControlBoard'

function App() {
  return (
    <div className="App">
      <div className='outer-container'>
        <DrumPadBoard />
        <ControlBoard />
      </div>
    </div>
  );
}

export default App;
