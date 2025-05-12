import React from 'react';
import './Weather.css';
import clear_icon from '../assets/clear.png';

const WeatherCard = ({ temperature, icon, location }) => {
  return (
    <>
      <img src={icon} alt="Weather Icon" className="weather-icon" />
      <p className="temperature">{temperature}°C</p>
      <p className="location">{location}</p>
    </>
  );
};

export default WeatherCard;