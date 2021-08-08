import Pad from './Pad';
const Keypad = ({soundData}) => {
    return (
        <div className="keypad">
            {soundData.map(item => {
                return <Pad key={item.pad} item={item}/>
            })}
        </div>
    );
}

export default Keypad;