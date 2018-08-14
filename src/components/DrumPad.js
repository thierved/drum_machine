import React from 'react';

function playSound(props)  {
    const audio = document.getElementById(props.text);
    if (props.isOn === true) {
        props.tune(props.name);            
        audio.play();
    }   
}

const DrumPad = (props) => {  

    document.addEventListener('keypress', (event) => {
        if (event.key === props.text.toLowerCase()) {
            playSound(props);
        }
    });  


    return(
        <div className='drum-pad' id={props.name} onClick={playSound} >
            {props.text}
            <audio src={props.src} className='clip' id={props.text} type='audio/mp3'/>
        </div>
    );
    
};

export default DrumPad;