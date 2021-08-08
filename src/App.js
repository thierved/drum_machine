import ControlBoard from './components/Display';
import Keypad from './components/Keypad';
import data from './data';


const App = () => {
  const soundData = data;
  return (
    <div id="drum-machine">
      <Keypad soundData={soundData}/>
      <ControlBoard />
    </div>
  );
}

export default App;
