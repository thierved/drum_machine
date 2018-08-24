import React from 'react'

const Controlls = (props) => {
  
  return (
    <div className="controlls">
        <div id="switch">
          <div className="switch">
            <span className="btn btn-on"></span>on
          </div>
          <div className="switch">
            <span className="btn btn-off"></span>off
          </div>
        </div>
        <div id="display">
            {props.songName}
        </div>
    </div>
  )
}

export default Controlls;