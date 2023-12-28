import { useState } from 'react';
import Map from './components/Map.jsx';
import NavigationTabs from "./components/NavigationTabs.jsx";
import TextToSpeech from './components/TextToSpeech.jsx';

import './index.css';

const App = () => {
  const [visibleMarker, setVisibleMarker] = useState(false);
  const [isSomethingVisible, setSomethingVisible] = useState(false);

  const text =
  "Haus";

  const toggleMarker = () => {
    setVisibleMarker(!visibleMarker);
  };

  const handleChildClick = (value) => {
    setSomethingVisible(value);
  };

  return (
    <div className='app'>
      <button className='text-xl absolute z-[401] left-12 top-0' onClick={toggleMarker}>Marker</button>
      <Map visibleMarker={visibleMarker} />
      <NavigationTabs onChildClick={() => handleChildClick(!isSomethingVisible)} />
      {isSomethingVisible &&
      <div className='absolute z-[505] bottom-40'>
        <TextToSpeech text={text} />
      </div>}
    </div>
  );
};

export default App;
