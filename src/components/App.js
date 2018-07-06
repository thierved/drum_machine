import React, {Component} from 'react';
import DrumPad from './DrumPad';
import Controlls from './Controlls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tuneName: ''
    }

    this.setTuneName = this.setTuneName.bind(this);
  }

  setTuneName(value) {
    this.setState({tuneName: value});
  }

  render() {
    return (
      <div id="drum-machine">
        <Controlls display={this.state.tuneName ? this.state.tuneName: ''} />
        <div id='pads'>
            <DrumPad text='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' name='Heater 1' tune={this.setTuneName}/>
            <DrumPad text='W' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' name='Dsc Oh' tune={this.setTuneName}/>
            <DrumPad text='E' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' name='Kick n Hat' tune={this.setTuneName}/>
            <DrumPad text='A' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' name='RP4 KICK 1' tune={this.setTuneName}/>
            <DrumPad text='S' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' name='Cev H2' tune={this.setTuneName}/>
            <DrumPad text='D' src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' name='Chord 1' tune={this.setTuneName}/>
            <DrumPad text='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' name='Give us a light' tune={this.setTuneName}/>
            <DrumPad text='X' src='https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' name='Dry Ohh' tune={this.setTuneName}/>
            <DrumPad text='C' src='https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' name='Bld H1' tune={this.setTuneName}/>
        </div>
      </div>
    )
  }
}

export default App;