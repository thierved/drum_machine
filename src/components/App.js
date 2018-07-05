import React, {Component} from 'react';
import DrumPad from './DrumPad';

class App extends Component {
    render() {
      return (
        <div id="drum-machine">
            <DrumPad text='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' name='Heater-1' />
            <DrumPad text='W' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' name='Dsc_Oh'/>
            <DrumPad text='E' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' name='Kick_n_Hat'/>
            <DrumPad text='A' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' name=''/>
            <DrumPad text='S' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' name='Cev_H2'/>
            <DrumPad text='D' src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' name='Chord_1'/>
            <DrumPad text='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' name='Give_us_a_light'/>
            <DrumPad text='X' src='https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' name='Dry_Ohh'/>
            <DrumPad text='C' src='https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' name='Bld_H1.mp3'/>
        </div>
      )
    }
}

export default App;