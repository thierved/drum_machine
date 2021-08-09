

const Display = ({soundName, switchBtn, setSwitchBtn}) => {
    return (
        <div className="display">
            <button id="switch"
                onClick={() => {setSwitchBtn(!switchBtn)}}
            >ON | OFF</button>
            <div id="screen">{soundName && switchBtn ?`${soundName}` : ""}</div>
        </div>
    );
}

export default Display;