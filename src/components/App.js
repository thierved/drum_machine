import React, {Component} from 'react';
import DrumPads from './DrumPads';
import '../App.css';
import Controlls from './Controlls';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: true,
      songName: ''
    }

    this.turnOnOrOff = this.turnOnOrOff.bind(this);
    this.setName = this.setName.bind(this);
  }

  setName = (name) => {
    this.setState({songName: name});  
  }

  turnOnOrOff = () => {
    this.setState({isOn: !this.state.isOn});
    
  }

  render() {

    console.log(this.state.isOn);
    return (
      <div id="drum-machine">
        <Controlls songName={this.state.songName} switcher={this.turnOnOrOff} isOn={this.state.isOn}/>
        <DrumPads setName={this.setName} isOn={this.state.isOn}/>
      </div>
    )
  }    
}

export default App;