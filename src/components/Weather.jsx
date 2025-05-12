import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';

import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import WeatherDetails from './WeatherDetails';
import Forecast from './ForecastList';

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const allcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const forecastRes = await fetch(forecastUrl);
      const forecastData = await forecastRes.json();

      if (!response.ok) {
        alert("City not found");
        return;
      }

      if (!forecastRes.ok) {
        alert("Forecast data not available");
        return;
      }

      const dailyForecast = forecastData.list.filter(reading =>
        reading.dt_txt.includes("12:00:00")
      ).slice(0, 5);

      const icon = allcons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        wind: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
        forecast: dailyForecast,
      });

    } catch (error) {
      setWeatherData(false);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("Vadodara");
  }, []);

  return (
    <div className="weather">
      <SearchBar inputRef={inputRef} onSearch={search} />
      {weatherData && (
        <>
          <WeatherCard
            icon={weatherData.icon}
            temperature={weatherData.temperature}
            location={weatherData.location}
          />
          <WeatherDetails
            humidity={weatherData.humidity}
            wind={weatherData.wind}
          />
          <Forecast forecastData={weatherData.forecast} /> {/* Pass forecast data to Forecast component */}
        </>
      )}
    </div>
  );
};

export default Weather;
