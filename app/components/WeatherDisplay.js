"use client";

import { useQuery } from "@tanstack/react-query";
import { useApiKeyStore } from "../store";
import { fetchWeatherByCity } from "../services/weatherServices";
import Loading from "./Loading";
import WeatherInfo from "./WeatherInfo";
import { toast } from "react-toastify";

export default function WeatherDisplay({ city }) {
  const { apiKey } = useApiKeyStore();

  const { data, error, isLoading } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherByCity(city, apiKey),
    enabled: !!city,
  });

  if (error) return toast.error(error.message);

  return isLoading ? <Loading /> : <WeatherInfo data={data} />;
}
