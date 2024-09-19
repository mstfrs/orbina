'use client';

import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useApiKeyStore } from './store';
import CitySelector from './components/CitySelector';
import WeatherDisplay from './components/WeatherDisplay';

const queryClient = new QueryClient();

export default function Home() {
  const { apiKey, setApiKey } = useApiKeyStore();
  const [inputKey, setInputKey] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const storedApiKey = sessionStorage.getItem('apiKey');
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, [setApiKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputKey.trim() !== '') {
      setApiKey(inputKey);
    }
  };



  return (
    
    <QueryClientProvider client={queryClient}>
      {
        apiKey?  <div className="bg-bg-cloud min-h-screen bg-cover bg-center bg-no-repeat md:bg-fixed flex flex-col items-center  justify-start py-5">
        <h1 className="text-3xl mb-4">Orbina Weather App</h1>
        <CitySelector onSelectCity={setSelectedCity} />
        {selectedCity && <WeatherDisplay city={selectedCity} />}
      </div>: <div className="bg-bg-cloud bg-cover bg-center flex flex-col  h-screen">
        <h1 className="text-3xl mb-4">Hava Durumu Uygulaması</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            placeholder="API Key'inizi girin"
            className="border-2 border-gray-300 p-2 rounded mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            API Keyi Kaydet
          </button>
        </form>
      </div>
      }
   
    </QueryClientProvider>
  );
}
