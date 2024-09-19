// components/WeatherApp.tsx
'use client'
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import CitySelect from './CitySelector';
import Map from './Map';
import { getWeatherByCoordinates } from '../utils/api';
import classNames from '../utils/classNames'
import cities from '../data/cities'

export default function WeatherApp() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    const storedApiKey = sessionStorage.getItem('weatherApiKey');
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const { data: weatherData, error, refetch } = useQuery({
    queryKey: ['weather', selectedCity],
    queryFn: () => getWeatherByCoordinates(selectedCity.lat, selectedCity.lon, apiKey),
    enabled: !!selectedCity && !!apiKey,
  });

  // const data= useQuery({queryKey:['weatherData',selectedCity],queryFn:getWeatherByCoordinates})

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    refetch();
  };

  if (!apiKey) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <form onSubmit={(e) => { e.preventDefault(); sessionStorage.setItem('weatherApiKey', apiKey); }} className="bg-white p-6 rounded shadow-md">
          <h1 className="text-xl mb-4">Enter Your OpenWeatherMap API Key</h1>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="border p-2 mb-4 w-full"
            placeholder="API Key"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <TabGroup>
        <TabList className="flex space-x-1 bg-blue-900/20 p-1 rounded-lg">
          <Tab className={({ selected }) => classNames(
            'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
            selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
          )}>
            Şehir Listesi
          </Tab>
          <Tab className={({ selected }) => classNames(
            'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
            selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
          )}>
            Türkiye Haritası
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="p-3 bg-white rounded shadow-md">
            <CitySelect cities={cities} onCitySelect={handleCitySelection} />
            {weatherData && (
              <div className="mt-6">
                <h3 className="text-lg font-bold">Hava Durumu - {weatherData.name}</h3>
                <p>Temperature: {weatherData.main.temp}°C</p>
                <p>Feels Like: {weatherData.main.feels_like}°C</p>
                <p>Weather: {weatherData.weather[0].description}</p>
              </div>
            )}
          </TabPanel>
          <TabPanel className="p-3 bg-white rounded shadow-md">
            <Map onCitySelect={handleCitySelection} />
            {weatherData && (
              <div className="mt-6">
                <h3 className="text-lg font-bold">Hava Durumu - {weatherData.name}</h3>
                <p>Temperature: {weatherData.main.temp}°C</p>
                <p>Feels Like: {weatherData.main.feels_like}°C</p>
                <p>Weather: {weatherData.weather[0].description}</p>
              </div>
            )}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
