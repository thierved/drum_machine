import React from 'react';
import DrumPads from './DrumPads';
import '../App.css';
import Controlls from './Controlls';

const App = () => {
  
  return (
    <div id="drum-machine">
      <Controlls />
      <DrumPads />
    </div>
  )
}

export default App;