
const Pad = ({ item, switchBtn, setSoundName }) => {
    return (
        <button
            className="drum-pad"
            id={item.name}
            onClick={() => {
                if (switchBtn) { 
                    document.getElementById(item.pad).play();
                    setSoundName(item.name.replaceAll("_", " ").toUpperCase())
                }
            }}
        >
            <audio
                src={item.sound}
                className="pad"
                id={item.pad}
            ></audio>
            {item.pad}
        </button>
    );
}

export default Pad;