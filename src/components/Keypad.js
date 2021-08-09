import Pad from './Pad';
const Keypad = ({ soundData, switchBtn, setSoundName }) => {
    return (
        <div className="keypad">
            {soundData.map(item => {
                return <Pad key={item.pad}
                    item={item}
                    switchBtn={switchBtn} 
                    setSoundName={setSoundName}/>
            })}
        </div>
    );
}

export default Keypad;