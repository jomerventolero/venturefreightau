import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ locations }) => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const handleMouseOver = (location) => {
    setHoveredLocation(location);
  };

  const handleMouseLeave = () => {
    setHoveredLocation(null);
  };

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={[location.lat, location.lng]}
          onMouseOver={() => handleMouseOver(location)}
          onMouseOut={handleMouseLeave}
        >
          <Popup>{location.address}</Popup>
        </Marker>
      ))}
      {hoveredLocation && (
        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'white', padding: '10px', zIndex: 1 }}>
          <p>Hovered Address: {hoveredLocation.address}</p>
        </div>
      )}
    </MapContainer>
  );
};

export default Map;
