import axiosInstance from "../utils/api";

export const fetchWeatherByCity = async (city, apiKey) => {
  const response = await axiosInstance.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    {
      params: {
        q: city,
        appid: apiKey,
        units: "metric",
      },
    }
  );
  return response.data;
};

export const fetchWeatherByCoordinates = async (lat, lon, apiKey) => {
  const response = await axiosInstance.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    {
      params: {
        lat: lat,
        lon: lon,
        appid: apiKey,
        units: "metric",
      },
    }
  );
  return response.data;
};

export const checkApiKey = async (apiKey) => {
  const response = await axiosInstance.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    {
      params: {
        q: "Ankara",
        appid: apiKey,
        units: "metric",
      },
    }
  );
  return response.data;
};
