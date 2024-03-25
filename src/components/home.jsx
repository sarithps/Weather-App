import React, { useState, useRef } from "react";
import "./home.css";
import { fetchCoordinates, fetchWeatherData } from "../services/WeatherService";
import Weather from "./weather";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCityName(inputRef.current.value);

    try {
      const { latitude, longitude } = await fetchCoordinates(
        inputRef.current.value
      );
      const weather = await fetchWeatherData(latitude, longitude);
      setError(false);
      setWeatherData(weather);
    } catch (error) {
      setWeatherData(null);
      setError(true);
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter city name"
          className="input-field"
          ref={inputRef}
        />
        <button type="submit" className="submit-button">
          Get Weather
        </button>
      </form>
      {weatherData && <Weather weatherData={weatherData} cityName={cityName} />}
      {error && (
        <div> Enter valid city name</div>
      )}
    </div>
  );
};

export default Home;