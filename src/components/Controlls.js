import React from 'react';

const Controlls = (props) => {
    return (
        <div id="controller">
            <div id="powerButton">
            <div className={props.isOn === true? 'isOn':'isOff'}><span onClick={props.switchIt} className={props.isOn === true? 'on':'off'}></span></div>
            </div>
            <div id='display'>
                <h4>{props.display.toUpperCase()}</h4>
            </div>
        </div>
    );
}

export default Controlls;