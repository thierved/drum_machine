import React, {Component} from 'react';


class DrumPad extends Component {  
    constructor(props) {
        super(props);
    }

    playSound = (name) => {
        const audio = document.getElementById(this.props.text);
        if (this.props.isOn === true) {
            this.props.tune(name);            
            audio.play();
        }
    }

    render() {
        return(
            <div className='drum-pad' id={this.props.name} onClick={() => this.playSound(this.props.name)} >
                {this.props.text}
                <audio src={this.props.src} className='clip' id={this.props.text} type='audio/mp3'/>
            </div>
        );

    }
    
};

export default DrumPad;