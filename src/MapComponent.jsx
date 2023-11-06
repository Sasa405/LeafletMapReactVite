// MapComponent.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

const MapComponent = ({ pins, onMapClick }) => {
    console.log('onMapClick:', onMapClick);
  return (
    <div className="map-container">
      <MapContainer center={[51.64, 10.08]} zoom={7} style={{ height: '100vh', width: '100vw' }}  onClick={() => console.log('Map clicked')}>
        <TileLayer
          url="https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=dddc9e07de57409598a166dc35e41db3"
          attribution='&copy; <a href="https://www.thunderforest.com/">Thunderforest</a> contributors'
        />
        {pins.map((pin) => (
          <Marker key={pin.id} position={pin.coordinates}>
            {/* Hier kannst du Popups oder weitere Informationen für den Pin hinzufügen */}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
