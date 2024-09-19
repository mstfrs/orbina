"use client";

import { useQuery } from "@tanstack/react-query";
import { useApiKeyStore } from "../store";
import { fetchWeatherByCity } from "../services/weatherServices";
import Loading from "./Loading";



export default function WeatherDisplay({ city }) {
  const { apiKey } = useApiKeyStore();

  const { data, error, isLoading } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherByCity(city, apiKey),
    enabled: !!city,
  });

  if (isLoading) return <Loading/>;
  if (error)
    return (
      <div className="text-center text-red-500">Hata: {error.message}</div>
    );

  return (
    isLoading?<Loading/>:
      <div className="container relative sm:w-full w-3/4 m-10 mx-auto mt-8 p-4 rounded-lg shadow-lg bg-slate-50 bg-opacity-20">
      <div className="z-20">
        <h2 className="text-3xl font-semibold mb-2 text-center">{data.name}</h2>
        <div className="flex items-center flex-col justify-center gap-3 mt-3 ">
          <div className="bg-blue-400 w-40 h-40 rounded-full items-center flex justify-center ">
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.description}
              className="w-36 h-36"
            />
          </div>
          <p className="text-3xl font-extrabold">{data.main.temp} °C</p>
        </div>

        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-around mt-5 gap-5">
          <div className="flex items-center flex-col justify-center gap-3 mt-3 border-b-2 sm:border-none py-3">
            <h2 className="sm:text-2xl text-xl font-semibold mb-2 text-center">
              Humidity
            </h2>
            <div className="bg-blue-400 sm:w-40 sm:h-40 w-28 h-28 rounded-full items-center flex justify-center p-2 ">
              <img
                src="/images/humidity.png"
                alt={data.description}
                className="md:w-28 md:h-28 w-20 h-20 m-4"
              />
            </div>
            <p className="text-3xl font-extrabold">{data.main.humidity}</p>
          </div>
          <div className="flex items-center flex-col justify-center gap-3 mt-3 border-b-2 sm:border-none py-3">
            <h2 className="sm:text-2xl text-xl font-semibold mb-2 text-center">
              Max Temp
            </h2>
            <div className="bg-blue-400 sm:w-40 sm:h-40 w-28 h-28 rounded-full items-center flex justify-center p-2">
              <img
                src="/images/hot.png"
                alt={data.description}
                className="md:w-28 md:h-28 w-20 h-20"
              />
            </div>
            <p className="text-3xl font-extrabold">
              {data.main.temp_max}{" "}
              <span className="text-lg font-semibold"> °C</span>{" "}
            </p>
          </div>
          <div className="flex items-center flex-col justify-center gap-3 mt-3 border-b-2 sm:border-none py-3">
            <h2 className="sm:text-2xl text-xl font-semibold mb-2 text-center">
              Min Temp
            </h2>
            <div className="bg-blue-400 sm:w-40 sm:h-40 w-28 h-28 rounded-full items-center flex justify-center p-2">
              <img
                src="/images/cold.png"
                alt={data.description}
                className="md:w-28 md:h-28 w-20 h-20"
              />
            </div>
            <p className="text-3xl font-extrabold">
              {data.main.temp_min}{" "}
              <span className="text-lg font-semibold"> °C</span>
            </p>
          </div>
          <div className="flex items-center flex-col justify-center gap-3 mt-3 border-b-2 sm:border-none py-3">
            <h2 className="sm:text-2xl text-xl font-semibold mb-2 text-center">Wind</h2>
            <div className="bg-blue-400 sm:w-40 sm:h-40 w-28 h-28 rounded-full items-center flex justify-center p-2">
              <img
                src="/images/wind.png"
                alt={data.description}
                className="md:w-28 md:h-28 w-20 h-20"
              />
            </div>
            <p className="text-3xl font-extrabold">
              {data.wind.speed}{" "}
              <span className="text-lg font-semibold"> km/h</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    
  )
  
}
