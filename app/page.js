"use client";

import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useApiKeyStore } from "./store/store";
import WeatherApp from "./components/WeatherApp";
import LoginForm from "./components/LoginForm";


const queryClient = new QueryClient();


export default function Home() {
  const { apiKey, setApiKey } = useApiKeyStore();
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    if (global?.window !== 'undefined') {
      const storedApiKey = sessionStorage.getItem('apiKey');
      if (storedApiKey) {
        setApiKey(storedApiKey);
      }
    }
  }, [setApiKey]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-bg-cloud from-indigo-400 to-cyan-400 bg-cover flex flex-col justify-start items-center min-h-screen relative">
        {apiKey ? (
          <>
            <div className="flex items-center justify-center ">
            

              <h1 className="text-3xl mb-2 text-center font-semibold bg-gradient-to-b from-fuchsia-700 to-white bg-clip-text text-transparent mt-5">
               Orbina Weather App
              </h1>
            </div>

            <WeatherApp
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          </>
        ) : (
          <LoginForm setApiKey={setApiKey} />
        )}
      </div>
    </QueryClientProvider>
  );
}
