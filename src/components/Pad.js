
const Pad = ({ item }) => {
    return (
        <button
            className={"drum-pad"}
            id={item.name}
            onClick={() => document.getElementById(item.pad).play()}
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