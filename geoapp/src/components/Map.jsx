// Map.js
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';


import markersData from '../markers.json';
import 'leaflet/dist/leaflet.css';

const Map = ({ visibleMarker }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    setMarkers(markersData);
  }, []); 

  const createCustomIcon = (location) => {
    return new Icon({
      iconUrl: `src/assets/${location}.svg`,
      iconSize: [35, 50],
    });
  };

  return (
    <MapContainer className='h-[90vh]' center={[49.7287168, 11.9144448]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {visibleMarker &&
        markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={createCustomIcon(marker.location)}>
            <Popup>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <img style={{ width: '60px' }} src={`src/assets/${marker.location}.jpg`} alt={marker.location} />
                <h3>{marker.location}</h3>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Map;
