import React, {Component} from 'react';
import DrumPads from './DrumPads';
import '../App.css';
import Controlls from './Controlls';


class App extends Component {

  render() {
    return (
      <div id="drum-machine">
        <Controlls />
        <DrumPads />
      </div>
    )
  }    
}

export default App;