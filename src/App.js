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

const Pad = ({ item, playSound, setSoundName }) => {
  return (
    <button
      className="drum-pad"
      id={item.name}
      onClick={() => {
        playSound(item.pad);
        setSoundName(item.name);
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

const Keypad = ({ soundData, switchBtn, setSoundName, playSound }) => {

  return (
    <div className="keypad">
      {soundData.map(item => {
        return <Pad key={item.pad}
          item={item}
          switchBtn={switchBtn}
          setSoundName={setSoundName}
          playSound={playSound} />
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
    if (switchBtn) {
      document.getElementById(key.toUpperCase()).play();
      data.forEach(d => {
        if (d.pad === key.toUpperCase()) {
          setSoundName(d.name.replaceAll("_", " ").toUpperCase());
        }
      })
    }
  }

  const handleKeyPress = e => {
    if ("QWEASDZXC".includes(e.key.toUpperCase())) {
      playSound(e.key);
    }
  }

  useEffect(() => {
    window.addEventListener("keypress", e => handleKeyPress(e));
  });

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
