import React from 'react';
import './Weather.css';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const WeatherDetails = ({ humidity, wind }) => {
  return (
    <div className="weather-details">
      <div className="col">
        <img src={humidity_icon} alt="Humidity" />
        <div>
          <p>Humidity</p>
          <span>{humidity}</span>
        </div>
      </div>
      <div className="col">
        <img src={wind_icon} alt="Wind Speed" />
        <div>
          <p>Wind Speed</p>
          <span>{wind}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;