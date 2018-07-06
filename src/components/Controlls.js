import React from 'react';

const Controlls = (props) => {
    return (
        <div id="controller">
            <div id="powerButton">
                <div><span></span></div>
            </div>
            <div id='display'>
                <h4>{props.display.toUpperCase()}</h4>
            </div>
        </div>
    );
}

export default Controlls;