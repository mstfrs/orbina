import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherByCoordinates } from "../services/weatherServices";
import { useApiKeyStore } from "../store/store";
import WeatherInfo from "./WeatherInfo";
import Loading from "./Loading";

const Map = () => {
  const [position, setPosition] = useState(null);
  const { apiKey } = useApiKeyStore();

  // Koordinatları kullanarak React Query ile hava durumu verisini sorgula
  const { data: weatherData, error, isLoading} = useQuery({
    queryKey: ["weather", position], // Koordinatları queryKey olarak kullanıyoruz
    queryFn: () => fetchWeatherByCoordinates(position.lat, position.lng, apiKey),
    enabled: !!position, // Sadece koordinatlar mevcut olduğunda sorgulama yap
  });

  // Haritaya tıklanılan noktaların koordinatlarını elde eden bileşen
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng); // Tıklanan koordinatları al
      },
    });

    return position ? (
      <Marker position={position}>
        <Popup>
          Seçilen Konum: {position.lat}, {position.lng}
        </Popup>
      </Marker>
    ) : null;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <MapContainer
        center={[39.9334, 32.8597]}
        zoom={6}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>

      {/* Hava durumu verisi yükleniyorsa */}
      {isLoading && <Loading/>}

      {/* Hata mesajı varsa */}
      {error && <p>Hata: {error.message}</p>}

      {/* Hava durumu verisi geldiğinde */}
      {weatherData && (
      <WeatherInfo data={weatherData} />
      )}
    </div>
  );
};

export default Map;
