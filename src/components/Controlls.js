import React from 'react'

const Controlls = (props) => {
  return (
    <div className="controlls">
        <div id="switch">
            
        </div>
        <div id="display">
            {props.songName}
        </div>
    </div>
  )
}

export default Controlls;