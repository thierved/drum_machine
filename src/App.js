import { useState } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import data from './data';


const App = () => {
  const soundData = data;
  const [switchBtn, setSwitchBtn] = useState(true);
  const [soundName, setSoundName] = useState();

  return (
    <div id="drum-machine">
      <Keypad soundData={soundData}
        switchBtn={switchBtn} 
        setSoundName={setSoundName}/>
      <Display
        setSwitchBtn={setSwitchBtn}
        switchBtn={switchBtn} 
        soundName={soundName}/>
    </div>
  );
}

export default App;
