import React from 'react'

const WeatherItem = ({data}) => {
    console.log('data',data)
  return (
  <>
    <h2 className="text-3xl font-semibold mb-2 text-center">{data.name}</h2>
    <div className='flex items-center flex-col justify-center gap-3 mt-3 '>
    <div className='bg-blue-400 w-40 h-40 rounded-full items-center flex justify-center '>
        <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.description}
              className="w-36 h-36"
            />
            </div>
        <p className="text-3xl font-extrabold">{data.main.temp} °C</p>
    </div>
  </>)
}

export default WeatherItem
