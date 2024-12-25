import React, { useState } from 'react'
import TimeBox from '../TimeBox/TimeBox'
import WeatherInfo from '../WeatherDataInfo/WeatherInfo'
import './MainContext.css'
import axios from 'axios'

export default function MainContext() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');
  const [currentDisplay, setCurrentDisplay] = useState('block');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=fe4feefa8543e06d4f3c66d92c61b69c`;

  const getWeatherData = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then(res => {
        showDisplay();
        setWeatherData(res.data);
      }).catch(err => {
        console.log(err);
      });
      setCity('');
    }
  }

  const showDisplay = () => {
    if (currentDisplay === 'block') {
      setCurrentDisplay('none');
    } else {
      setCurrentDisplay('block');
    }
  }

  // console.log(weatherData.length);
  const toCelsius = (temp) => {
    return ((temp - 32) * 5 / 9).toFixed();
  }


  return (
    <div id='mainContext' className='container-fluid'>
      <div className="searchBox">
        <input type="text" value={city} placeholder="Enter Location" onChange={(e) => setCity(e.target.value)} onKeyPress={getWeatherData} />
      </div>

      <h1 style={{ position: 'absolute', top: '50%', display: currentDisplay }} className='display-4 '>Search for a location to view Weather Data</h1>
      {weatherData.main ? <TimeBox temperature={toCelsius(weatherData.main.temp)} /> : null}
      {weatherData.main ? <WeatherInfo temperature={toCelsius(weatherData.main.temp)} name={weatherData.name} clouds={weatherData.weather[0].main} humidity={weatherData.main.humidity} speed={weatherData.wind.speed} visibility={weatherData.visibility} /> : null}
    <br/></div >
  )
}
