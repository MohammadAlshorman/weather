import React from 'react'
import './Weatherinfo.css'
export default function WeatherInfo(props) {
    return (
        <div id='weatherInfo'>
            <img style={{ filter: "invert()" }} src="https://static.thenounproject.com/png/3541181-200.png" alt="cloud" />
            <h1 className='display-4'>Haze</h1><br />
            <h4>{props.name}</h4>
            <p className="fs-4">Temperature &nbsp;&nbsp; {props.temperature}°C {props.clouds} </p>
            <p className="fs-4">Humidity &nbsp;&nbsp; {props.humidity}% </p>
            <p className="fs-4">Wind Speed &nbsp;&nbsp; {props.speed}km/h </p>
            <p className="fs-4">Visibility &nbsp;&nbsp; {props.visibility} mi </p>
        </div>
    )
}
