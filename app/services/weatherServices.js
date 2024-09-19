import axios from "axios";

export const fetchWeatherByCity = async (city, apiKey) => {
    const response = await axios.get(
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