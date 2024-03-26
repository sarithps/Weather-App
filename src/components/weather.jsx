import React from "react";
import "./weather.css";
import "bootstrap/dist/css/bootstrap.css";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { CiTempHigh } from "react-icons/ci";
import { TbWind } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";

const Weather = ({ weatherData, cityName }) => {
  function getTimeFromDateTime(dateTimeString) {
    const dateObj = new Date(dateTimeString);
    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function getDateFromDateTime(dateTimeString) {
    const dateObj = new Date(dateTimeString);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    return `${day}/${month}`;
  }

  function getDateTime(dateTimeString) {
    const dateObj = new Date(dateTimeString);
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObj.getDate().toString().padStart(2, "0");
    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    return `${day}/${month} ${hours}:${minutes}`;
  }

  return (
    <div className="main-container">
      <div className="location-and-date">
        <h1 className="location-and-date__location"> {cityName} </h1>
        <div className="location-and-date__time"> {getDateTime(weatherData?.current_weather.time)} </div>
      </div>

      <div className="current-temperature">
        <div className="current-temperature__content-container">
          <div className="current-temperature__value">
            {weatherData?.current_weather.temperature}{" "}
            {weatherData?.current_weather_units.temperature}
          </div>
        </div>
      </div>

      <div className="current-stats">
        <div>
          <div className="current-stats__value">
            {" "}
            <CiTempHigh />  {" "}
            {weatherData?.daily.temperature_2m_max[0]}{" "}
            {weatherData?.daily_units.temperature_2m_max}{" "} 
          </div>
          <div className="current-stats__label">High</div>
          <div className="current-stats__value">
          <TbWind />  {" "}
            {weatherData?.current_weather.windspeed}{" "}
            {weatherData?.current_weather_units.windspeed} 
          </div>
          <div className="current-stats__label">Wind</div>
        </div>
        <div>
          <div className="current-stats__value">
          <FiSunrise/>  {" "}
            {getTimeFromDateTime(weatherData?.daily.sunrise[0])} 
          </div>
          <div className="current-stats__label">Sunrise </div>
          <div className="current-stats__value">
          <FiSunset /> {" "}
            {getTimeFromDateTime(weatherData?.daily.sunset[0])} 
          </div>
          <div className="current-stats__label">Sunset</div>
        </div>
      </div>

      <div className="next-5-days">
        <h2 className="next-5-days__heading">Next 5 days</h2>
        <div className="next-5-days__container">
          <div className="next-5-days__row">
            <div className="next-5-days__date">
            <FaRegCalendarAlt /> {" "}{getDateFromDateTime(weatherData?.daily.time[1])}
            </div>
            <div className="next-5-days__high">
            <CiTempHigh />  {" "}{weatherData?.daily.temperature_2m_max[1]} {weatherData?.daily_units.temperature_2m_max}
              <div className="next-5-days__label">High</div>
            </div>

            <div className="next-5-days__wind">
            <TbWind />  {" "}
              {weatherData?.daily.windspeed_10m_max[1]}{" "}
              {weatherData?.daily_units.windspeed_10m_max}
              <div className="next-5-days__label">Wind</div>
            </div>
          </div>

          <div className="next-5-days__row">
            <div className="next-5-days__date">
            <FaRegCalendarAlt /> {" "}{getDateFromDateTime(weatherData?.daily.time[2])}
            </div>

            <div className="next-5-days__high">
              <CiTempHigh />  {" "}{weatherData?.daily.temperature_2m_max[2]} {weatherData?.daily_units.temperature_2m_max}
              <div className="next-5-days__label">High</div>
            </div>

            <div className="next-5-days__wind">
            <TbWind />  {" "}
              {weatherData?.daily.windspeed_10m_max[2]}{" "}
              {weatherData?.daily_units.windspeed_10m_max}
              <div className="next-5-days__label">Wind</div>
            </div>
          </div>

          <div className="next-5-days__row">
            <div className="next-5-days__date">
            <FaRegCalendarAlt /> {" "}{getDateFromDateTime(weatherData?.daily.time[3])}
            </div>

            <div className="next-5-days__high">
              <CiTempHigh />  {" "}{weatherData?.daily.temperature_2m_max[3]} {weatherData?.daily_units.temperature_2m_max}
              <div className="next-5-days__label">High</div>
            </div>

            <div className="next-5-days__wind">
            <TbWind />  {" "}
              {weatherData?.daily.windspeed_10m_max[3]}{" "}
              {weatherData?.daily_units.windspeed_10m_max}
              <div className="next-5-days__label">Wind</div>
            </div>
          </div>

          <div className="next-5-days__row">
            <div className="next-5-days__date">
            <FaRegCalendarAlt /> {" "}{getDateFromDateTime(weatherData?.daily.time[4])}
            </div>

            <div className="next-5-days__high">
              <CiTempHigh />  {" "}{weatherData?.daily.temperature_2m_max[4]} {weatherData?.daily_units.temperature_2m_max}
              <div className="next-5-days__label">High</div>
            </div>

            <div className="next-5-days__wind">
            <TbWind />  {" "}
              {weatherData?.daily.windspeed_10m_max[4]}{" "}
              {weatherData?.daily_units.windspeed_10m_max}
              <div className="next-5-days__label">Wind</div>
            </div>
          </div>

          <div className="next-5-days__row">
            <div className="next-5-days__date">
            <FaRegCalendarAlt /> {" "}{getDateFromDateTime(weatherData?.daily.time[5])}
            </div>

            <div className="next-5-days__high">
              <CiTempHigh />  {" "}{weatherData?.daily.temperature_2m_max[5]} {weatherData?.daily_units.temperature_2m_max}
              <div className="next-5-days__label">High</div>
            </div>

            <div className="next-5-days__wind">
            <TbWind />  {" "}
              {weatherData?.daily.windspeed_10m_max[5]}{" "}
              {weatherData?.daily_units.windspeed_10m_max}
              <div className="next-5-days__label">Wind</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
