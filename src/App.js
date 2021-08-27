import React, { useState, useEffect } from 'react';
import data from './data';

const Display = ({ soundName, switchBtn, setSwitchBtn }) => {

  return (
    <div id="display">
      <button id="switch"
        onClick={() => { setSwitchBtn(!switchBtn) }}
      >ON | OFF</button>
      <div id="screen">{soundName && switchBtn ? `${soundName}` : ""}</div>
    </div>
  );
}

const Pad = ({ item, switchBtn, setSoundName }) => {
  return (
    <button
      className="drum-pad"
      id={item.name}
      onClick={() => {
        if (switchBtn) {
          document.getElementById(item.pad).play();
          setSoundName(item.name.replaceAll("_", " ").toUpperCase());
        }
      }}
    >
      <audio
        src={item.sound}
        className="clip"
        id={item.pad}
      ></audio>
      {item.pad}
    </button>
  );
}

const Keypad = ({ setSoundName, soundData, switchBtn }) => {

  return (
    <div className="keypad">
      {soundData.map(item => {
        return <Pad key={item.pad}
          item={item}
          switchBtn={switchBtn}
          setSoundName={setSoundName} />
      })
      }
    </div>
  );
}

const App = () => {
  const soundData = data;
  const [switchBtn, setSwitchBtn] = useState(true);
  const [soundName, setSoundName] = useState();

  const playSound = (key) => {
    console.log(switchBtn)
    if (switchBtn) {
      document.getElementById(key.toUpperCase()).play();
      soundData.forEach(d => {
        if (d.pad === key.toUpperCase()) {
          setSoundName(d.name.replaceAll("_", " ").toUpperCase());
        }
      })
    }
  }

  

  useEffect(() => {
    const handleKeyPress = ({key}) => {
      if ("QWEASDZXC".includes(key.toUpperCase())) {
        console.log(switchBtn)
        if (switchBtn) {
          document.getElementById(key.toUpperCase()).play();
          soundData.forEach(d => {
            if (d.pad === key.toUpperCase()) {
              setSoundName(d.name.replaceAll("_", " ").toUpperCase());
            }
          })
        }
      }
    }
    document.addEventListener("keypress", handleKeyPress);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, [switchBtn, soundData]);

  return (
    <div id="drum-machine">
      <Keypad soundData={soundData}
        switchBtn={switchBtn}
        setSoundName={setSoundName}
        playSound={playSound} />
      <Display
        setSwitchBtn={setSwitchBtn}
        switchBtn={switchBtn}
        soundName={soundName} />
    </div>
  );
}

export default App;
