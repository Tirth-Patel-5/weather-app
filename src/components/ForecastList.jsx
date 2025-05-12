import React from 'react';
import './Weather.css';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';

const ForecastList = ({ forecastData }) => {
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

  return (
    <div className="forecast">
      {forecastData && forecastData.map((day, index) => (
        <div key={index} className="forecast-day">
          <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
          <img src={allcons[day.weather[0].icon] || clear_icon} alt="" />
          <p>{Math.floor(day.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastList;
