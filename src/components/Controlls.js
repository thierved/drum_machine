import React from 'react';

const Controlls = (props) => {
    return (
        <div id="controller">
            <div>
                <div><span>on/off</span></div>
            </div>
            <div id='display'>
                <h4>{props.display}</h4>
            </div>
        </div>
    );
}

export default Controlls;