import React, { useState, useRef } from "react";
import "./home.css";
import { fetchCoordinates, fetchWeatherData } from "../services/WeatherService";
import Weather from "./weather";
import noMessage from "../no-message.png";
import { BallTriangle } from "react-loader-spinner";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // setCityName(inputRef.current.value);

    try {
      const { latitude, longitude } = await fetchCoordinates(
        inputRef.current.value
      );
      const weather = await fetchWeatherData(latitude, longitude);
      setError(false);
      setLoading(false);
      setCityName(inputRef.current.value);
      setWeatherData(weather);
    } catch (error) {
      setLoading(false);
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
      {loading ? (
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {" "}
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#FFFFFF"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />{" "}
        </div>
      ) : (
        weatherData && <Weather weatherData={weatherData} cityName={cityName} />
      )}
      {/* {weatherData && <Weather weatherData={weatherData} cityName={cityName} />} */}
      {error && !loading && (
        <div>
          <div>
            <img id="no-message-icon" src={noMessage} alt="logo" />
          </div>
          <div className="no-message-text">Please enter a valid city name</div>
        </div>
      )}
    </div>
  );
};

export default Home;
