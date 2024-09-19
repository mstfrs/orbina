'use client';

import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, ListboxLabel } from '@headlessui/react';
import cities from '@/app/data/cities.json';
import { CheckIcon } from '@radix-ui/react-icons';

export default function CitySelector({ onSelectCity }) {
  const [selectedCity, setSelectedCity] = useState('');

  const handleSelect = (city) => {
    setSelectedCity(city);
    onSelectCity(city);
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-8">
      <Listbox value={selectedCity} onChange={handleSelect}>
        {({ open }) => (
          <>
           
            <div className="relative">
            
              <ListboxButton
                className="block w-full bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl"
              >
                {selectedCity || 'Şehir seçin'}
              </ListboxButton>
              <ListboxOptions className=" absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto text-2xl">
              <CheckIcon className="invisible size-5 group-data-[selected]:visible" />
                {cities.map((city) => (
                  <ListboxOption
                    key={city.name}
                    value={city.name}
                    className={({ active }) =>
                      `cursor-pointer px-4 py-2  ${active ? 'bg-blue-500 text-white' : 'text-gray-900'}`
                    }
                  >
                    {/* <CheckIcon className="invisible size-5 group-data-[selected]:visible" /> */}
                    {city.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
