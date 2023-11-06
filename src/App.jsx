// App.jsx
import React, { useState } from 'react';
import MapComponent from './MapComponent';
import PinForm from './PinForm';

const App = () => {
  const [pins, setPins] = useState([]);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    console.log('App.jsx: Clicked on map at:', lat, lng);
    const newPin = {
      id: pins.length + 1,
      coordinates: [lat, lng],
    };
    setPins([...pins, newPin]);
  };

  const handlePinSubmit = (pinInfo) => {
    // Logik zur Verarbeitung des Pins hier
    console.log('Received pin info:', pinInfo);
  };

  return (
    <div>
      <PinForm onPinSubmit={handlePinSubmit} />
      <MapComponent pins={pins} onMapClick={handleMapClick} />
    </div>
  );
};

export default App;
