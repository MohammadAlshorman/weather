import React, { useState } from 'react'
import './TimeBox.css'
export default function TimeBox(props) {
    const getCurrentTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }
    const getCurrentDate = () => {
        const date = new Date();
        return date.toDateString();
    }
    const [date, setDate] = useState(getCurrentDate());
    const [time, setTime] = useState(getCurrentTime());
    setInterval(() => {
        setTime(getCurrentTime());
        setDate(getCurrentDate());
    });

    return (
        <div id='timeBox' className='container'>
            <div className="clock">
                <h1 className='display-5'>{time}</h1>
                <h1 className='display-6'>{date}</h1>
            </div>
            <div className="temperature">
                <h1 className="display-1">{props.temperature}°C</h1>
            </div>
        </div>
    )
}
