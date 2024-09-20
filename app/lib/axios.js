import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_OPENWEATHERMAP_BASE_URL,
  timeout: 10000, // 10 saniye zaman aşımı
});

export default axiosInstance;
