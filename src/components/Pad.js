
const Pad = ({ item }) => {
    return (
        <button
            className={"drum-pad"}
            id={item.name}
            onClick={() => console.log(item.name)}
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