// components/WeatherApp.tsx
"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Map from "./Map";
import classNames from "../utils/classNames";
import WeatherDisplay from "./WeatherDisplay";
import CitySelector from "./CitySelector";

export default function WeatherApp({  selectedCity, setSelectedCity }) {
  return (
    <div className="flex flex-col items-start justify-start container ">
      <TabGroup className="sm:w-full w-3/4 m-10 mt-2 mx-auto">
        <TabList className="flex space-x-1 bg-gray-500 border border-blue-800 p-1 rounded-lg">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-lg leading-5 font-medium  rounded-lg",
                selected
                  ? "bg-gray-300 text-black shadow"
                  : "text-white  hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Şehir Listesi
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-lg leading-5 font-medium rounded-lg",
                selected
                  ? "bg-gray-300 text-black shadow"
                  : "text-white  hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Türkiye Haritası
          </Tab>
        </TabList>
        <TabPanels className="h-full">
          <TabPanel className="p-3 rounded ">
            <CitySelector onSelectCity={setSelectedCity} />
            {selectedCity && <WeatherDisplay city={selectedCity} />}
          </TabPanel>
          <TabPanel className="p-3 rounded ">
            <Map />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
