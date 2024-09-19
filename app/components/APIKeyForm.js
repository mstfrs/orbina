'use client'
import { useState } from 'react';

const APIKeyForm = ({ setIsKeyValid }) => {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (apiKey.trim()) {
      sessionStorage.setItem('weatherApiKey', apiKey);
      setIsKeyValid(true);
    } else {
      setError('Please enter a valid API key.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="p-5 bg-white rounded shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Enter Your OpenWeatherMap API Key</h1>
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)} // Doğru event handler burada
          className="p-2 border border-gray-300 rounded w-full mb-4"
          placeholder="API Key"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Submit
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default APIKeyForm;
