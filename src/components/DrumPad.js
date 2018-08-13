import React from 'react';


const DrumPad = (props) => {  

    document.addEventListener('keypress', (event) => {
        if (event.key === props.text.toLowerCase()) {
            playSound(props.name);
        }
    });
    
    function playSound(name)  {
        const audio = document.getElementById(props.text);
        if (props.isOn === true) {
            props.tune(name);            
            audio.play();
        }   
    }

    return(
        <div className='drum-pad' id={props.name} onClick={() => playSound(props.name)} >
            {props.text}
            <audio src={props.src} className='clip' id={props.text} type='audio/mp3'/>
        </div>
    );

    
};

export default DrumPad;