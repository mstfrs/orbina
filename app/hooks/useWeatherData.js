'use client'
import { useQuery } from '@tanstack/react-query'; // React Query v5 ile birlikte yeni import
import api from '../utils/api'; // Doğru dizini kontrol edin

const fetchWeatherData = async (lat, lon) => {
  const { data } = await api.get('/weather', {
    params: {
      lat,
      lon,
      units: 'metric', // Veriyi metrik birimlerde almak için
    },
  });
  return data;
};

export const useWeatherData = (lat, lon) => {
  return useQuery({
    queryKey: ['weatherData', lat, lon],
    queryFn:fetchWeatherData(lat, lon),
    enabled: !!lat && !!lon, // Lat ve Lon varsa çalışır
  });
};
