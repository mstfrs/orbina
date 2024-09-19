import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // API key'i çevre değişkenlerinden alıyoruz

// Axios instance oluşturma
export const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5', // OpenWeather API base URL
  params: {
    appid: apiKey, // Her istekte API anahtarını göndermek için
    units: 'metric', // Verileri Celsius cinsinden almak için
  },
});

// Hava durumu bilgisini almak için fonksiyon
export const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const response = await axiosInstance.get('/weather', {
      params: {
        lat, // Latitude
        lon, // Longitude
      },
    });
    return response.data;
  } catch (error) {
    console.error('Hava durumu verilerini alma hatası:', error);
    throw error;
  }
};

// Şehir adına göre hava durumu bilgisi almak
export const getWeatherByCityName = async (city) => {
  try {
    const response = await axiosInstance.get('/weather', {
      params: {
        q: city, // Şehir adı
      },
    });
    return response.data;
  } catch (error) {
    console.error('Hava durumu verilerini alma hatası:', error);
    throw error;
  }
};
