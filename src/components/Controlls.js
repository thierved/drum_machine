import React from 'react'

const Controlls = (props) => {  
 
  return (
    <div className="controlls">
        <div id="switch">
          <div className="switch">
            <span className="btn btn-on" onClick={() => props.isOn === false ? props.switcher() : null}></span>on
          </div>
          <div className="switch">
            <span className="btn btn-off" onClick={() => props.isOn === true ? props.switcher() : null}></span>off
          </div>
        </div>
        <div id="display">
            {props.songName}
        </div>
    </div>
  )
}

export default Controlls;