import React, {Component} from 'react';
import DrumPad from './DrumPad';
import Controlls from './Controlls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tuneName: '',
      isOn: true
    }

    this.setTuneName = this.setTuneName.bind(this);
    this.switchIt = this.switchIt.bind(this);
  }

  setTuneName(value) {
    this.setState({tuneName: value});
  }

  switchIt() {
    this.setState({isOn : !this.state.isOn});
  }

  render() {
    return (
      <div id="drum-machine">
        <Controlls display={this.state.tuneName} switchIt={this.switchIt} isOn={this.state.isOn} />
        <div id='pads'>
            <DrumPad text='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' name='Heater 1' tune={this.setTuneName} isOn={this.state.isOn}/>
            <DrumPad text='W' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' name='Dsc Oh' tune={this.setTuneName} isOn={this.state.isOn}/>
            <DrumPad text='E' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' name='Kick n Hat' tune={this.setTuneName} isOn={this.state.isOn}/>
            <DrumPad text='A' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' name='RP4 KICK 1' tune={this.setTuneName} isOn={this.state.isOn}/>
            <DrumPad text='S' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' name='Cev H2' tune={this.setTuneName} isOn={this.state.isOn}/>
            <DrumPad text='D' src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' name='Chord 1' tune={this.setTuneName} isOn={this.state.isOn}/>
            <DrumPad text='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' name='Give us a light' tune={this.setTuneName} isOn={this.state.isOn}/>
            <DrumPad text='X' src='https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' name='Dry Ohh' tune={this.setTuneName} isOn={this.state.isOn}/>
            <DrumPad text='C' src='https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' name='Bld H1' tune={this.setTuneName} isOn={this.state.isOn}/>
        </div>
      </div>
    )
  }
}

export default App;