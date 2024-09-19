import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ position, setPosition }) => {
  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition({ lat: e.latlng.lat, lon: e.latlng.lng });
      },
    });
    return position === null ? null : <Marker position={[position.lat, position.lon]} />;
  }

  return (
    <MapContainer center={[position.lat, position.lon]} zoom={6} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
