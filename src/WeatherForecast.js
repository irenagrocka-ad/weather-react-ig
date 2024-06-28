import React from "react"
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="col">
                <div className="WeatherForecast-day"></div>
                <div className="WeatherForecast-icon"><WeatherIcon code="01d" size={36} /> </div>
                <div className="WeatherForecast-temperature">
                    <span className="WeatherForecast-temperature-max">15</span>
                    <span className="WeatherForecast-temperature-min">13</span>
                    <span className="WeatherForecast-temperature-unit">°C</span>
                </div>
            </div>
        </div>
    );
}